import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Get the qBittorrent session cookie
  const qbtSid = event.cookies.get('qbt_sid');
  console.log("yeah")
  // Set user in locals if authenticated
  if (qbtSid) {
    event.locals.user = {
      authenticated: true,
      sid: qbtSid
    };
  }
    
  console.log(event.url.pathname)
  console.log(event.locals.user)
  // Protect all routes under /qbt except /qbt/login
  if (event.url.pathname.startsWith('/qbt') && 
      event.url.pathname !== '/qbt/login' && 
      !event.locals.user) {
    throw redirect(303, '/qbt/login');
  }

  // If logged in and trying to access login page, redirect to torrents
  if (event.url.pathname === '/qbt/login' && event.locals.user) {
    throw redirect(303, '/qbt/torrents');
  }
  
  return resolve(event);
};