import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const streamUrl = searchParams.get('url');

  console.log('Proxy requested for URL:', streamUrl);

  if (!streamUrl) {
    return new Response('Missing url query parameter', { status: 400 });
  }

  // Validate URL to prevent abuse
  if (!streamUrl.match(/^https?:\/\/[^\s/$.?#].[^\s]*\.m3u8$/)) {
    return new Response('Invalid stream URL', { status: 400 });
  }

  try {
    const response = await axios.get(streamUrl, {
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/vnd.apple.mpegurl, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://windflash93.xyz/',
        'Origin': 'https://windflash93.xyz/',
        'Connection': 'keep-alive',
      },
      timeout: 10000,
    });

    const headers = new Headers();
    headers.set('Content-Type', response.headers['content-type'] || 'application/vnd.apple.mpegurl');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    headers.set('Cache-Control', 'no-cache');

    return new Response(response.data, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Stream proxy error:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data?.toString().slice(0, 200),
    });
    return new Response(`Failed to fetch stream: ${error.message}`, { status: 500 });
  }
}