// React
import { FC, Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// Hooks router.
import { useRoutes } from 'react-router-dom';

// Routes object.
import routes from './routers/router';

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>{useRoutes(routes())}</Suspense>
  );
};

export default AppRoutes;
