import Card from '../components/Card';
import { fetchRecentAcquisitions } from '../lib/api/fetchRecent';


type Artwork = {
    id: number;
    title: string;
    primaryimageurl: string;
};

export const metadata = {
    title: 'Recent Acquisitions',
    description: 'Browse the newest artworks in our collection.',
};

export default async function RecentAcquisitionsPage() {
    let artworks: Artwork[] = [];

    try {
        artworks = (await fetchRecentAcquisitions()) ?? [];
    } catch (error) {
        console.error('Failed to fetch recent acquisitions:', error);
        return (
            <div className="container mx-auto p-8 text-center text-red-500">
                Failed to load recent acquisitions. Please refresh the page.
            </div>
        );
    }

    if (!artworks.length) {
        return (
            <div className="container mx-auto p-8 text-center text-gray-500">
                No recent acquisitions found.
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                Recent Acquisitions
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {artworks.map((artwork) => (
                    <Card
                        key={artwork.id}
                        artworkTitle={artwork.title}
                        artworkImage={artwork.primaryimageurl}
                    />
                ))}
            </div>
        </div>
    );
}