import type { LayoutServerLoad } from './$types';
import { routeTitles } from '$lib/server/pageTitles';

export const load: LayoutServerLoad = async ({ url }) => {
	const pathname = url.pathname;
	const title = routeTitles[pathname] ?? 'Page';

	return {
		pageTitle: title
	};
};