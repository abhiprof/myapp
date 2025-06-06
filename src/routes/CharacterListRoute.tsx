import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import CharacterList from '../features/CharaterList';

export const characterListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: CharacterList,
  validateSearch: (search) => {
    return {
      page: Number(search.page) || 1,
    };
  },
});
