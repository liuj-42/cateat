import { json } from "@sveltejs/kit";

import { getLanguages } from "$lib/server/database";

export function GET() {
    return json(getLanguages())
}