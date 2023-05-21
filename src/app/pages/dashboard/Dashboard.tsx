import { Typography } from '@mui/material';
import { DetailTools } from 'app/shared/components';
import { useAppDrawerContext, useAppThemeContext } from 'app/shared/contexts';
import { PageBaseLayout } from 'app/shared/layouts';

export const PageDashboard = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <PageBaseLayout
      title="Página inicial"
      toolbar={<DetailTools />}
    >
      <Typography>
        Essa é a página inicial do <strong>App</strong>.
      </Typography>
    </PageBaseLayout>
  );
};
