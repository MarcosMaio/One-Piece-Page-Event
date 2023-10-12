import React, { useEffect } from 'react';
import { useCharacters } from '../context/Characters';
import { useQuery } from 'react-query';
import fetchCharacters from '../services/fetchCharacters';

export default function API() {
    const { setCharacters } = useCharacters();
    const { data: characters, isLoading, isError } = useQuery('characters', fetchCharacters);

    useEffect(() => {
        if (!isLoading && !isError) {
            setCharacters(characters);
        }
    }, [characters, isLoading, isError, setCharacters]);

    return (
        <>
            {isLoading && (
                <div className="loader">
                    <p className="text">
                        <span className="letter letter1">L</span>
                        <span className="letter letter2">o</span>
                        <span className="letter letter3">a</span>
                        <span className="letter letter4">d</span>
                        <span className="letter letter5">i</span>
                        <span className="letter letter6">n</span>
                        <span className="letter letter7">g</span>
                        <span className="letter letter8">.</span>
                        <span className="letter letter9">.</span>
                        <span className="letter letter10">.</span>
                    </p>
                </div>
            )}
        </>
    );
}
