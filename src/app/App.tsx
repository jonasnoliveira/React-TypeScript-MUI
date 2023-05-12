import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppDrawerProvider, AppThemeProvider } from './shared/contexts';
import { SideMenu } from './shared/components';

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <SideMenu>
            <AppRoutes />
          </SideMenu>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};
