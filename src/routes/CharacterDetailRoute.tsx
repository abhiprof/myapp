import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './Root';
import CharacterDetail from '../features/CharacterDetail';

export const characterDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character/$id',
  component: CharacterDetail,
  validateSearch: () => ({}), 
});
