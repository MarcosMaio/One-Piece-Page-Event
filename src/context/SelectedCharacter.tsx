import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type Character = {
    name: string;
    description: string;
    image: string;
    id: number;
};

type selectedCharacterContextType = {
    selectedCharacter: Character | null;
    setSelectedCharacter: Dispatch<SetStateAction<Character | null>>;
}

const SelectedCharacterContext = createContext<selectedCharacterContextType | undefined>(undefined);

type SelectedCharacterProviderProps = {
    children: React.ReactNode;
}

export function SelectedCharacterProvider({ children }: SelectedCharacterProviderProps) {
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

    return (
        <SelectedCharacterContext.Provider value={{ selectedCharacter, setSelectedCharacter }} >
            {children}
        </SelectedCharacterContext.Provider>
    )
}

export function useSelectedCharacter() {
    const context = useContext(SelectedCharacterContext);
    if (!context) {
        throw new Error('useSelectedCharacter must be used within a SelectedCharacterProvider');
    }
    return context;
}