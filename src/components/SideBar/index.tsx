import React, { useEffect, useState } from 'react'
import Flags from '../../../json/db.json'
import { useSelectedCharacter } from '@/src/context/SelectedCharacter';
import { useCharacters } from '@/src/context/Characters';
import Image from 'next/image';


export default function SideBar() {
    const { setSelectedCharacter, selectedCharacter } = useSelectedCharacter();
    const { characters } = useCharacters() || { characters: [] };

    
    const handleImageClick = (flagId: number) => {
        const getCharacterById = characters.find((character) => character.id === flagId);
    
        if (getCharacterById) {
            setSelectedCharacter(getCharacterById);
        }
    };

    
    useEffect (() => {
        console.log(selectedCharacter)
    }, [selectedCharacter])

    return (
        <div className='fixed right-0 top-0 w-[120px] h-[100%] bg-[#EEEEEE] bg-opacity-10'>
                <ul className='flex flex-col justify-center items-center'>
                    {Flags.map((flag) => (
                        <li key={flag.id} onClick={() => handleImageClick(flag.id)}>
                            <Image className='mt-3 mb-3 cursor-pointer' src={flag.flag} alt={''}  width='80' height='80' />
                        </li>
                    ))}
                </ul>
            </div>
    )
}
