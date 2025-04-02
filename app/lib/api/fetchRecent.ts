export async function fetchRecentAcquisitions() {
    const res = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${process.env.API_KEY}&q=recent`,
        { cache: 'no-store' } // Same here, we want to make sure the data is fresh
    );

    if (!res.ok) {
        throw new Error(`Error fetching recent acquisitions: ${res.statusText}`);
    }

    const data = await res.json();
    return data.records;
}