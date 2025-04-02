// import Card from '../components/Card';
// import { fetchPopular } from '../lib/api/fetchPopular';
// import { Suspense } from 'react';
// import styled from 'styled-components';
//
// type Artwork = {
//     id: number;
//     title: string;
//     primaryimageurl: string;
// };
//
// export const metadata = {
//     title: 'Popular Artworks',
//     description: 'Browse the most popular artworks in our collection.',
// };
//
// async function PopularArtworksList() {
//     let artworks: Artwork[] = [];
//
//     try {
//         artworks = (await fetchPopular()) ?? [];
//     } catch (error) {
//         console.error('Failed to fetch artworks:', error);
//         return <ErrorMessage>Failed to load artworks. Please refresh the page.</ErrorMessage>;
//     }
//
//     if (!artworks.length) {
//         return <NoArtworksMessage>No artworks found.</NoArtworksMessage>;
//     }
//
//     return (
//         <GridContainer>
//             {artworks.map((artwork) => (
//                 <Card key={artwork.id} artworkTitle={artwork.title} artworkImage={artwork.primaryimageurl} />
//             ))}
//         </GridContainer>
//     );
// }
//
// export default function PopularArtworksPage() {
//     return (
//         <Container>
//             <Title>Popular Artworks</Title>
//             <Suspense fallback={<LoadingMessage>Loading artworks...</LoadingMessage>}>
//                 <PopularArtworksList />
//             </Suspense>
//         </Container>
//     );
// }
//
// /* Styled Components */
// const Container = styled.div`
//     max-width: 100%;
//     margin: 0 auto;
//     padding: 32px;
// `;
//
// const Title = styled.h1`
//     font-size: 2.5rem;
//     font-weight: 800;
//     text-align: center;
//     color: #333;
//     margin-bottom: 40px;
// `;
//
// const GridContainer = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     gap: 16px;
// `;
//
// const LoadingMessage = styled.div`
//     text-align: center;
//     color: #666;
// `;
//
// const ErrorMessage = styled.div`
//     text-align: center;
//     color: red;
//     font-weight: bold;
// `;
//
// const NoArtworksMessage = styled.div`
//     text-align: center;
//     color: #888;
// `;

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