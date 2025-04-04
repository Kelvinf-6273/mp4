export async function fetchPopular() {
    const res = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${process.env.API_KEY}&q=popular`,
        { cache: 'no-store' }
    );

    if (!res.ok) {
        throw new Error(`Error fetching popular works: ${res.statusText}`);
    }

    const data = await res.json();
    return data.records;
}
