'use client'

import HomePage from "@/src/components/Home";
import SideBar from "@/src/components/SideBar";
import { SelectedCharacterProvider } from "@/src/context/SelectedCharacter";
import API from "@/src/hooks/use_API";
import { CharactersProvider } from '../src/context/Characters';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

export default function Page() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <CharactersProvider>
            <SelectedCharacterProvider>
                <SideBar />
                <HomePage />
                <API />
            </SelectedCharacterProvider>
          </CharactersProvider>
      </QueryClientProvider>
    </main>
  )
}
