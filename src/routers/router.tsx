// Screens.
import Question1 from '../views/Question1';
// Interfaces.
import type { RouteObject } from 'react-router-dom';
import Home from '../views/Home';
import Question2 from '../views/Question2';

// Routes object.
const routes = (): Array<RouteObject> => [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/question-1',
    element: <Question1 />
  },
  {
    path: '/question-2',
    element: <Question2 />
  }
];

export default routes;
