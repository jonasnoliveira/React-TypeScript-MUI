import { Box, Typography } from '@mui/material';
import { DetailTools } from 'app/shared/components';
import { PageBaseLayout } from 'app/shared/layouts';
import { useNavigate, useParams } from 'react-router-dom';

export const PeopleDetail = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  return (
    <PageBaseLayout
      title="Detalhes pessoas!"
      toolbar={
        <DetailTools
          newButtonText="Nova"
          showSaveButton
          showSaveAndCloseButton
          showNewButton={id !== 'nova'}
          showDeleteButton={id !== 'nova'}
          whenClickingBack={() => navigate('/pessoas')}
          whenClickingSave={() => {}}
          whenClickingOnNew={() => navigate('/pessoas/detalhe/nova')}
          whenClickingDelete={() => {}}
          clickingOnSaveAndClose={() => {}}
        />
      }
    >
      <Typography>Detalhes pessoas!{id}</Typography>
    </PageBaseLayout>
  );
};
