import { redirect } from '@sveltejs/kit';

export async function load({ locals, cookies }) {
  if (!locals.user) {
    throw redirect(303, '/qbt/login');
  }

  try {
    // Call qBittorrent logout endpoint
    await fetch('http://192.168.1.173:8080/api/v2/auth/logout', {
      method: 'POST',
      headers: {
        'Cookie': `SID=${locals.user.sid}`
      }
    });
  } catch (error) {
    console.error('Logout error:', error);
    // Continue with logout even if API call fails
  }

  // Delete the session cookie
  cookies.delete('qbt_sid', { path: '/' });

  // Redirect to login page
  throw redirect(303, '/qbt/login');
}