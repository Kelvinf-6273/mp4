'use client';
import React from 'react';
import styled from 'styled-components';


interface ArtProps {
    artworkTitle: string;
    artworkImage: string;
}

export default function Card({ artworkTitle, artworkImage }: ArtProps) {
    return (
        <CardWrapper>
            <ImageWrapper>
                <img src={artworkImage} alt='image not available sorry :(' />
            </ImageWrapper>
            <TextWrapper>
                <h3>{artworkTitle}</h3>
            </TextWrapper>
        </CardWrapper>
    );
}

const CardWrapper = styled.div`
    background: #723c70;
    box-shadow: 10px 10px 10px rgba(183, 9, 76, 1);
    border-radius: 20px;
    padding: 16px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 70%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #5c4d7d;
    overflow: hidden;

    text-align: center;
    font-size: calc(1px + 2vw);
    font-style: italic;
    font-weight: bold;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const TextWrapper = styled.div`
    text-align: center;
    padding: 20px;
    h3 {
        font-size: calc(1px + 2vw);
        font-style: italic;
        font-weight: bold;
        color: #0091ad;
        margin: 0;
    }
`;
