// return words for the language

import { getWords } from "$lib/server/database.js";
import { json, error } from "@sveltejs/kit";




export function GET({url}) {
  const lang = url.pathname.slice(11)

  return json(getWords(lang));
}