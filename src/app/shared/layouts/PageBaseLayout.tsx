import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IPageBaseLayoutInterfaces } from '../interfaces/PageBaseLayoutInterfaces';
import { useAppDrawerContext } from '../contexts';

export const PageBaseLayout: React.FC<IPageBaseLayoutInterfaces> = ({
  title,
  toolbar,
  children,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <Box
      height="100%"
      paddingLeft={1}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <Box
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          margin={1}
        >
          {title}
        </Typography>
      </Box>

      {toolbar && (
        <Box>
          <Typography>{toolbar}</Typography>
        </Box>
      )}

      <Box
        flex={1}
        overflow="auto"
      >
        {children}
      </Box>
    </Box>
  );
};
