"use client";
import styled from "styled-components";
import Link from 'next/link';

const StyledHeader = styled.h2`
    text-align: center;
    font-style: italic;
    font-size: calc(2px + 2vw);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
`;

const StyledButton = styled(Link)`
    text-decoration: none;
    padding: 15px 30px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 1);
    display: inline;
    background-color: #e63946;

    &:hover {
        background-color: #c1272d;
    }
`;

const StyleHeader1 = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: calc(12px + 4vw);
    color: red;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`;

const PageContainer = styled.div`
    background-color: #cce7ff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default function Home() {
    return (
        <PageContainer>
            <StyleHeader1>Harvard Museum Art Collection</StyleHeader1>
            <StyledWrapper>
                <StyledButton href="/popular">
                    <StyledHeader>Popular Artworks</StyledHeader>
                </StyledButton>
                <StyledButton href="/recent">
                    <StyledHeader>Recent Acquisitions</StyledHeader>
                </StyledButton>
            </StyledWrapper>
        </PageContainer>
    );
}


