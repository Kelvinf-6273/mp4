
import Card from '../components/Card';
import { fetchPopular } from '../lib/api/fetchPopular';


type Artwork = {
    id: number;
    title: string;
    primaryimageurl: string;
};

export const metadata = {
    title: 'Popular Artworks',
    description: 'Browse the most popular artworks in our collection.',
};

export default async function PopularArtworksPage() {
    let artworks: Artwork[] = [];

    try {
        artworks = (await fetchPopular()) ?? [];
    } catch (error) {
        console.error('Failed to fetch artworks:', error);
        return (
            <div className="container mx-auto p-8 text-center text-red-500">
                Failed to load artworks. Please refresh the page.
            </div>
        );
    }

    if (!artworks.length) {
        return (
            <div className="container mx-auto p-8 text-center text-gray-500">
                No artworks found.
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                Popular Artworks
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