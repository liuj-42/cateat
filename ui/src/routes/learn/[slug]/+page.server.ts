import { getWords } from "$lib/server/database.js";
import { error } from "@sveltejs/kit";



export async function load({params}) {
  const lang = params.slug;

  const words = await getWords(lang)

  if (!words) error(404)

  return {words};
}
