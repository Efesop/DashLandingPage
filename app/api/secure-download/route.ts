import { NextRequest, NextResponse } from 'next/server'
import { verifyDownloadToken, consumeDownloadToken } from '../../../lib/downloadSecurity'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        { error: 'Download token is required' },
        { status: 400 }
      )
    }

    // Verify the download token
    const tokenVerification = verifyDownloadToken(token)
    
    if (!tokenVerification.isValid) {
      return NextResponse.json(
        { error: tokenVerification.error || 'Invalid download token' },
        { status: 403 }
      )
    }

    // Consume one download (decrement remaining downloads)
    const consumeResult = consumeDownloadToken(token)
    
    if (!consumeResult.success) {
      return NextResponse.json(
        { error: consumeResult.error || 'Download limit exceeded' },
        { status: 403 }
      )
    }

    // Fetch the latest release from GitHub
    const response = await fetch(
      'https://api.github.com/repos/Efesop/rich-text-editor/releases/latest',
      {
        headers: {
          'User-Agent': 'Dash-Secure-Download'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch latest release')
    }

    const release = await response.json()
    
    // Find the main app asset
    const asset = release.assets.find((asset: any) => 
      asset.name.endsWith('.dmg') || 
      asset.name.endsWith('.zip') || 
      asset.name.endsWith('.app.zip') ||
      asset.name.toLowerCase().includes('dash')
    )

    if (!asset) {
      const firstAsset = release.assets[0]
      if (firstAsset) {
        return NextResponse.redirect(firstAsset.browser_download_url)
      }
      throw new Error('No release assets found')
    }

    // Log the download for security audit
    console.log('Secure download initiated:', {
      token: token.substring(0, 10) + '...',
      customerEmail: tokenVerification.data?.customerEmail,
      asset: asset.name,
      downloadsRemaining: consumeResult.downloadsRemaining,
      timestamp: new Date().toISOString()
    })

    // Redirect to the actual download
    return NextResponse.redirect(asset.browser_download_url)
    
  } catch (error) {
    console.error('Error in secure download:', error)
    return NextResponse.redirect(
      'https://github.com/Efesop/rich-text-editor/releases/latest'
    )
  }
}
