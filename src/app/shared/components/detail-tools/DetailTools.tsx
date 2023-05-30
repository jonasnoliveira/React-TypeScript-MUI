import { Add, ArrowBack, Delete, Save } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Paper,
  Skeleton,
  Typography,
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
  showSaveAndCloseButton = true,

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveAndCloseButtonLoading = false,

  whenClickingOnNew,
  whenClickingBack,
  whenClickingDelete,
  whenClickingSave,
  clickingOnSaveAndClose,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
      {showSaveButton && !showSaveButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          size={smDown ? 'small' : 'medium'}
          onClick={whenClickingSave}
          startIcon={<Save />}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}

      {showSaveButtonLoading && (
        <Skeleton
          height={65}
          width={110}
        />
      )}

      {showSaveAndCloseButton &&
        !showSaveButtonLoading &&
        !smDown &&
        !mdDown && (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            size={smDown ? 'small' : 'medium'}
            onClick={clickingOnSaveAndClose}
            startIcon={<Save />}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e Fechar
            </Typography>
          </Button>
        )}

      {showSaveAndCloseButtonLoading && !smDown && !mdDown && (
        <Skeleton
          height={65}
          width={185}
        />
      )}

      {showDeleteButton && !showSaveButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          size={smDown ? 'small' : 'medium'}
          onClick={whenClickingDelete}
          startIcon={<Delete />}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}

      {showDeleteButtonLoading && (
        <Skeleton
          height={65}
          width={110}
        />
      )}

      {showNewButton && !showSaveButtonLoading && smDown && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          size={smDown ? 'small' : 'medium'}
          onClick={whenClickingOnNew}
          startIcon={<Add />}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {newButtonText}
          </Typography>
        </Button>
      )}

      {showNewButtonLoading && smDown && (
        <Skeleton
          height={65}
          width={110}
        />
      )}

      {showBackButton &&
        (showNewButton ||
          showDeleteButton ||
          showSaveButton ||
          showSaveAndCloseButton) && (
          <Divider
            variant="middle"
            orientation="vertical"
          />
        )}

      {showBackButton && !showSaveButtonLoading && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          size={smDown ? 'small' : 'medium'}
          onClick={whenClickingBack}
          startIcon={<ArrowBack />}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
        </Button>
      )}

      {showBackButtonLoading && (
        <Skeleton
          height={65}
          width={110}
        />
      )}
    </Box>
  );
};
