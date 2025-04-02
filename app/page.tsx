"use client";
import styled from "styled-components";

const StyledHeader =styled.h2`
    text-align: center;
    font-style: italic;
`;

const StyleHeader1 =styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: calc(10px + 2vw);
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    gap:50px;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    
    
`

import Link from 'next/link';

export default function Home() {
    return (
        <div>

            <div>
            <StyleHeader1>Harvard Museum Art Collection</StyleHeader1>

            </div>

            <StyledWrapper>
                <Link
                    href="/popular"
                >
                    <StyledHeader>Popular Artworks</StyledHeader>
                </Link>

                <Link
                    href="/recent"
                >
                    <StyledHeader>Recent Acquisitions</StyledHeader>
                </Link>

            </StyledWrapper>
        </div>
    );
}



{/*<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-md">*/}
{/*    <Link*/}
{/*        href="/popular"*/}
{/*        className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"*/}
{/*    >*/}
{/*        <h2 className="text-xl font-semibold text-gray-800 mb-2">Popular Artworks</h2>*/}
{/*        <p className="text-gray-600">View most admired pieces</p>*/}
{/*    </Link>*/}

{/*    <Link*/}
{/*        href="/recent"*/}
{/*        className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"*/}
{/*    >*/}
{/*        <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Acquisitions</h2>*/}
{/*        <p className="text-gray-600">Discover new additions</p>*/}
{/*    </Link>*/}
{/*</div>*/}

