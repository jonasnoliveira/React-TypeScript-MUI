import { Typography } from '@mui/material';
import { DetailTools } from 'app/shared/components';
import { PageBaseLayout } from 'app/shared/layouts';

export const PageDashboard = () => {
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
