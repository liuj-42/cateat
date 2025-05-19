import type { LayoutServerLoad } from './$types';
import { routeTitles } from '$lib/server/pageTitles';

export const load: LayoutServerLoad = async ({ url }) => {
	const pathname = url.pathname;
	let title = routeTitles[pathname] ?? 'Page';
	console.log(url)

	if (pathname.includes("/learn")) {
		let lang = pathname.slice(7)
		title = `learn ${lang}`
	}
	return {
		pageTitle: title
	};
};
