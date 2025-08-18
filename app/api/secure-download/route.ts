import { NextRequest, NextResponse } from 'next/server';
import {
  verifyDownloadToken,
  consumeDownloadToken,
} from '../../../lib/downloadSecurity';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      return NextResponse.json(
        { error: 'Download token is required' },
        { status: 400 }
      );
    }

    const tokenVerification = verifyDownloadToken(token);

    if (!tokenVerification.isValid) {
      return NextResponse.json(
        { error: tokenVerification.error || 'Invalid download token' },
        { status: 403 }
      );
    }

    const consumeResult = consumeDownloadToken(token);

    if (!consumeResult.success) {
      return NextResponse.json(
        { error: consumeResult.error || 'Download limit exceeded' },
        { status: 403 }
      );
    }

    const response = await fetch(
      'https://api.github.com/repos/Efesop/rich-text-editor/releases/latest',
      {
        headers: {
          'User-Agent': 'Dash-Secure-Download',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch latest release');
    }

    const release = await response.json();

    const asset = release.assets.find(
      (asset: any) =>
        asset.name.endsWith('.dmg') ||
        asset.name.endsWith('.zip') ||
        asset.name.endsWith('.app.zip') ||
        asset.name.toLowerCase().includes('dash')
    );

    if (!asset) {
      const firstAsset = release.assets[0];
      if (firstAsset) {
        return NextResponse.redirect(firstAsset.browser_download_url);
      }
      throw new Error('No release assets found');
    }

    return NextResponse.redirect(asset.browser_download_url);
  } catch (error) {
    console.error('Error in secure download:', error);
    return NextResponse.json(
      { error: 'Download failed. Please contact support.' },
      { status: 500 }
    );
  }
}
