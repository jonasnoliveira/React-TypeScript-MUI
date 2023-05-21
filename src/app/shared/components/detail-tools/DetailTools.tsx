import { Add, ArrowBack, Delete, Save } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      gap={1}
      marginX={smDown ? 0 : 1}
      paddingY={2}
      paddingX={smDown ? 1 : 2}
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
          size={smDown ? 'small' : 'medium'}
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
          variant="outlined"
          size={smDown ? 'small' : 'medium'}
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
          variant="outlined"
          size={smDown ? 'small' : 'medium'}
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
          variant="outlined"
          size={smDown ? 'small' : 'medium'}
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
          variant="outlined"
          size={smDown ? 'small' : 'medium'}
          onClick={whenClickingBack}
          startIcon={<ArrowBack />}
        >
          Voltar
        </Button>
      )}
    </Box>
  );
};
