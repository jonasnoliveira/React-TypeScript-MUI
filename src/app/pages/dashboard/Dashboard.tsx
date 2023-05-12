import { Box, Button } from '@mui/material';
import { useAppDrawerContext, useAppThemeContext } from 'app/shared/contexts';

export const PageDashboard = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleTheme}
      >
        <h1>Toggle Theme</h1>
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawerOpen}
      >
        <h1>Toggle Drawer</h1>
      </Button>
    </Box>
  );
};
