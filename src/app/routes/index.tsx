import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  PageDashboard,
  PageExit,
  PeopleDetail,
  PeopleListing,
} from 'app/pages';
import { useAppDrawerContext } from 'app/shared/contexts';
import {
  ExitToApp,
  Home,
  LocalActivity,
  LocationCity,
  People,
} from '@mui/icons-material';
import { Typography } from '@mui/material';

export const AppRoutes = () => {
  const { setDrawerOptions } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        to: '/pagina-inicial',
        children: <Home />,
      },
      {
        label: 'Pessoas',
        to: '/pessoas',
        children: <People />,
      },
      {
        label: 'Sair',
        to: '/sair',
        children: <ExitToApp />,
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={<PageDashboard />}
      />
      <Route
        path="/sair"
        element={<PageExit />}
      />

      <Route
        path="/pessoas"
        element={<PeopleListing />}
      />
      <Route
        path="/pessoas/detalhe/:id"
        element={<PeopleDetail />}
      />

      <Route
        path="*"
        element={<Navigate to="/pagina-inicial" />}
      />
    </Routes>
  );
};
