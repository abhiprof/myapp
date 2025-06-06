import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './Root';
import { characterListRoute } from './CharacterListRoute';
import { characterDetailRoute } from './CharacterDetailRoute';

const routeTree = rootRoute.addChildren([
  characterListRoute,
  characterDetailRoute,
]);

export const router = createRouter({ routeTree });
