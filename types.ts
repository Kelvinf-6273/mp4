export interface ArtObject {
    id: number;
    title: string;
    primaryimageurl: string;
}

export interface PageOneData {
    popularWorks: ArtObject[];
}

export interface PageTwoData {
    recentAcquisitions: ArtObject[];
}