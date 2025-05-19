import { error } from "@sveltejs/kit";


import { languages } from "./languages";
import { words } from "./words";


export async function getWords(lang: string): Promise<string[]> {

    if (!languages.includes(lang)) {
        error(404)
    }

    return Promise.resolve(words[lang])
    
}

export async function getLanguages(): Promise<string[]> {
    return Promise.resolve(languages)
}