import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PageDashboard, PageExit } from 'app/pages';
import { useAppDrawerContext } from 'app/shared/contexts';
import { ExitToApp, Home } from '@mui/icons-material';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        to: '/pagina-inicial',
        children: <Home />,
      },
      {
        label: 'Exit',
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
        path="*"
        element={<Navigate to="/pagina-inicial" />}
      />
    </Routes>
  );
};
