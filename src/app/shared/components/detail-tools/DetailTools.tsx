import { Add, ArrowBack, Delete, Save } from '@mui/icons-material';
import { Box, Button, Divider, Paper, useTheme } from '@mui/material';
import { IDetailTools } from 'app/shared/interfaces';

export const DetailTools: React.FC<IDetailTools> = ({
  newButtonText = 'Novo',

  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showSaveAndCloseButton = false,

  whenClickingOnNew,
  whenClickingBack,
  whenClickingDelete,
  whenClickingSave,
  clickingOnSaveAndClose,
}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      paddingY={2}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {showSaveButton && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickingSave}
          startIcon={<Save />}
        >
          Salvar
        </Button>
      )}
      {showSaveAndCloseButton && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={clickingOnSaveAndClose}
          startIcon={<Save />}
        >
          Salvar e Voltar
        </Button>
      )}
      {showDeleteButton && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickingDelete}
          startIcon={<Delete />}
        >
          Apagar
        </Button>
      )}
      {showNewButton && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickingOnNew}
          startIcon={<Add />}
        >
          {newButtonText}
        </Button>
      )}
      <Divider
        variant="middle"
        orientation="vertical"
      />
      {showBackButton && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={whenClickingBack}
          startIcon={<ArrowBack />}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
