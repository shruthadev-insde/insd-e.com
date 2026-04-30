// ─────────────────────────────────────────────────────────────
// Accord AI Proxy — Cloudflare Worker
// Paste this into your Worker's code editor on cloudflare.com
//
// Secret variable required:
//   Name:  GEMINI_KEY
//   Value: your Google AI Studio API key
// ─────────────────────────────────────────────────────────────

export default {
  async fetch(request) {

    // Allow browsers to connect (CORS preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    // Read the request from accord.html
    const body = await request.json();
    const model = body.model || 'gemini-1.5-flash';

    // Build the Gemini API URL (key stays hidden on the server)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`;

    // Forward to Google
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    // Send result back to accord.html
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
