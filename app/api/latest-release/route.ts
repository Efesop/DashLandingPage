import { NextRequest, NextResponse } from 'next/server'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    // Fetch the latest release from GitHub API
    const response = await fetch(
      'https://api.github.com/repos/Efesop/rich-text-editor/releases/latest',
      {
        headers: {
          'User-Agent': 'Dash-Landing-Page'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch latest release')
    }

    const release = await response.json()
    
    // Find the main app asset (usually .dmg, .zip, or .app)
    // Look for common macOS app extensions
    const asset = release.assets.find((asset: any) => 
      asset.name.endsWith('.dmg') || 
      asset.name.endsWith('.zip') || 
      asset.name.endsWith('.app.zip') ||
      asset.name.toLowerCase().includes('dash')
    )

    if (!asset) {
      // If no specific asset found, use the first one
      const firstAsset = release.assets[0]
      if (firstAsset) {
        return NextResponse.redirect(firstAsset.browser_download_url)
      }
      
      throw new Error('No release assets found')
    }

    // Redirect to the direct download URL
    return NextResponse.redirect(asset.browser_download_url)
    
  } catch (error) {
    console.error('Error fetching latest release:', error)
    
    // Fallback to the GitHub releases page
    return NextResponse.redirect(
      'https://github.com/Efesop/rich-text-editor/releases/latest'
    )
  }
}
