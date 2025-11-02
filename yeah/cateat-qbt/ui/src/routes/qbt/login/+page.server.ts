import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request, cookies }) => {
    console.log('Login action called');
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    if (!username || !password) {
      return fail(400, { error: 'Username and password are required' });
    }

    const user = username.toString();
    const pass = password.toString();

    const response = await fetch('http://192.168.1.173:8080/api/v2/auth/login', {
      method: 'POST',
      body: new URLSearchParams({
        username: user,
        password: pass
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });


    const text = await response.text();
    if (response.ok) {
      console.log("okj response ")

      if (text === 'Ok.') {
        // Extract the SID cookie from qBittorrent response
        const setCookieHeader = response.headers.get('set-cookie');
        console.log('Set-Cookie header:', setCookieHeader);
        if (setCookieHeader) {
          // Parse the SID cookie value
          const sidMatch = setCookieHeader.match(/SID=([^;]+)/);
          if (sidMatch) {
            const sid = sidMatch[1];

            // Store the qBittorrent SID cookie
            cookies.set('qbt_sid', sid, {
              path: '/',
              httpOnly: true,
              sameSite: 'strict',
              secure: process.env.NODE_ENV === 'production',
              maxAge: 60 * 60 * 24 * 7 // 1 week
            });
            console.log('Login successful, SID cookie set');
            return redirect(303, '/qbt/torrents');
          }
        }

        return fail(500, { error: 'Failed to get session cookie' });
      } else if ( text === "Fails.") {
        return fail(401, { error: 'Invalid username or password' });
      }
    }

    return fail(401, { error: text || 'Invalid username or password' });

  }

};