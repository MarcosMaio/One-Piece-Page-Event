import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type Characters = {
    name: string;
    description: string;
    image: string;
    id: number;
};

type CharactersContextType = {
    characters: Characters[];
    setCharacters: Dispatch<SetStateAction<Characters[]>>;
}

const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

type CharactersProviderProps = {
    children: React.ReactNode;
}

export function CharactersProvider({ children }: CharactersProviderProps) {
    const [characters, setCharacters] =  useState<Characters[]>([]);

    return (
        <CharactersContext.Provider value={{ characters, setCharacters }} >
            {children}
        </CharactersContext.Provider>
    )
}

export function useCharacters() {
    const context = useContext(CharactersContext);
    if (!context) {
        throw new Error('useCharacters must be used within a SelectedCharactersProvider');
    }
    return context;
}