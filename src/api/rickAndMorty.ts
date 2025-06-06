const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(page: number) {
  const res = await fetch(`${BASE_URL}/character?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch characters');
  return res.json();
}

export async function fetchCharacterById(id: number) {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  if (!res.ok) throw new Error('Failed to fetch character');
  return res.json();
}
