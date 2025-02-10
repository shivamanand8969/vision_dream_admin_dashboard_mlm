import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { alpha } from '@mui/material/styles';
import {
  Box,
  Stack,
  Drawer,
  Avatar,
  Typography,
  ListItemButton,
} from '@mui/material';

import { appRoutes } from '../../routes/config';
import { usePathname } from '../../routes/hooks';
import { RouterLink } from '../../routes/components';

import { useResponsive } from '../../hooks/use-responsive';

import Scrollbar from '../../components/scrollbar';

import { NAV } from './config-layout';
import Logo from '../../components/logo';

const Nav = ({ openNav, onCloseNav }) => {
  const  userInfo  = sessionStorage.getItem('userInfo');
  const pathname = usePathname();
  const upLg = useResponsive('up', 'lg');
  const uniqueGroups = [...new Set(appRoutes?.map(route => route.group))];
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const profileImage = "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg";
  const renderAccount = (
    <Box
      sx={{
       
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1.5,
        marginTop:1.5,
        alignItems: 'start',
        // backgroundColor: theme => `${theme.palette.primary.light}`,
      }}
    >
    <Box
      
      component="div"
      sx={{
        width: 80,
        height: "auto",
        alignSelf:'center',
        display: "flex",
        justifyContent:'center',
        objectFit: "contain",
      }}
    >
      <img src="/logo.png" alt="logo" />
    </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2, pt: 2, pb: 10 }}>
      {uniqueGroups.map((group, index) => (
        <div key={(index + 1).toString()}>
          <Typography
            variant="caption"
            color="primary"
            sx={{ textTransform: 'uppercase' }}
          >
            {group}
          </Typography>
          {appRoutes
            ?.filter(route => route.group === group)
            ?.map(item => {
              return (
                <NavItem
                  key={item.title}
                  item={item}
                  active={
                    '/' + item.path === pathname || item.path === pathname
                  }
                />
              );
            })}
        </div>
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        backgroundColor: theme => `${theme.palette.common.white}`,
      }}
    >
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );
  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: theme => `dashed 1px ${theme.palette.primary.main}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

const NavItem = ({ item, active }) => (
  <ListItemButton
    component={RouterLink}
    href={item.path}
    sx={{
      minHeight: 44,
      paddingY: 1,
      borderRadius: 0.75,
      typography: 'body2',
      textTransform: 'capitalize',
      fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
      color: active ? 'text.primary' : 'text.secondary',
      backgroundColor: active ? 'primary.main' : 'transparent',
      '&:hover': {
        backgroundColor: active ? 'primary.main' : 'transparent',
      },
    }}
  >
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mr: 2,
        color: active ? '#ffffff' : '#000000',
      }}
    >
      {item.icon}
    </Box>
    <Box
      component="span"
      sx={{
        color: active ? '#ffffff' : '#000000',
      }}
    >
      {item.title}
    </Box>
  </ListItemButton>
);

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
};

export default Nav;
