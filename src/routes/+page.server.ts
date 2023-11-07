import type { PageServerLoad } from "./$types";

/**
 * Rendering incorrect
 */
export const csr = false;

/**
 * Rendering correct
 */
// export const ssr = false;

export const load: PageServerLoad = async () => {
    const postData = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    
    return await postData.json();
};