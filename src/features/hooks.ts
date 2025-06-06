import { useQuery } from '@tanstack/react-query';
import { fetchCharacters, fetchCharacterById } from '../api/rickAndMorty';

export function useCharacters(page: number) {
  return useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
  });
}

export function useCharacterDetail(id: number) {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
  });
}
