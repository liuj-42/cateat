import { qbtFetch } from '$lib/qbt-api';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    if (!locals.user) {
        throw redirect(303, '/qbt/login');
    }
    const response = await qbtFetch(locals.user.sid, '/torrents/info');
    const torrents = await response.json();
    return { torrents };
}