import React, { useEffect, useState } from 'react'
import { useSelectedCharacter } from '@/src/context/SelectedCharacter';
import { useCharacters } from '@/src/context/Characters';
import Image from 'next/image';


interface Character {
    name: string;
    description: string;
    image: string;
    id: number;
}

export default function HomePage() {
    const { selectedCharacter } = useSelectedCharacter();
    const [showBeginCharacter, setShowBeginCharacter] = useState<Character | null>(null);
    const { characters } = useCharacters();

    useEffect (() => {
        if(characters) {
            setShowBeginCharacter(characters[0])
        }
    },[characters])

    useEffect (() => {
        if (selectedCharacter) {
            setShowBeginCharacter(selectedCharacter)
        }
    },[selectedCharacter])

    return (  
        <>
            {showBeginCharacter && (
                <div key={showBeginCharacter.name} className='bg-cover bg-no-repeat bg-right-top h-screen flex justify-evenly items-center' style={{ backgroundImage: `url(${showBeginCharacter.image})` }}>
                    <div className='text-white pl-20 flex flex-col text-left'>
                        <Image className='max-w-customLogo mb-4 slideAnimation delay-500' src='/assets/One Piece Logo Vector.svg' alt="" width='250' height='250' />
                        <h1 className='mb-4 text-T-1 font-bold tracking-L-Space-1 slideAnimation delay-1000'>{showBeginCharacter.name}</h1>
                        <p className='w-[35%] text-P-1 leading-L-Height-1 slideAnimation delay-[1500ms]'>{showBeginCharacter.description}</p>
                    </div>
                </div>
            )}
        </>
    )
}
