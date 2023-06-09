import { Add } from '@mui/icons-material';
import { Box, Button, Paper, TextField, useTheme } from '@mui/material';
import { Enviroments } from 'app/shared/environments';
import { IToolbar } from 'app/shared/interfaces';

export const Toolbar: React.FC<IToolbar> = ({
  searchText = '',
  whenChangingSearchText,
  showSearchInput = false,
  WhenClickingOnNew,
  newButtonText = 'Novo',
  showNewButton = true,
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
      {showSearchInput && (
        <TextField
          size="small"
          value={searchText}
          placeholder={Enviroments.SEARCH_INPUT}
          onChange={(e) => whenChangingSearchText?.(e.target.value)}
        />
      )}

      <Box
        flex={1}
        display="flex"
        justifyContent="end"
      >
        {showNewButton && (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={WhenClickingOnNew}
            endIcon={<Add />}
          >
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};
