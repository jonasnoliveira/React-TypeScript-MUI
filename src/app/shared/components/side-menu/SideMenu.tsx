import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ExitToApp, Home } from '@mui/icons-material';

import { IChildren, IListItemLinkProps } from 'app/shared/interfaces';
import { useAppDrawerContext } from 'app/shared/contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  children,
  label,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  return (
    <ListItemButton
      selected={!!match}
      onClick={handleClick}
    >
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const SideMenu: React.FC<IChildren> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } =
    useAppDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(28)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(22), width: theme.spacing(22) }}
              src="https://avatars.githubusercontent.com/u/58858328?s=400&u=89504a493dd0fb91822108cac97e9c8bdf0d2627&v=4"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.to}
                  label={drawerOption.label}
                  to={drawerOption.to}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                >
                  {drawerOption.children}
                </ListItemLink>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box
        height="100vh"
        marginLeft={smDown ? 0 : theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  );
};
