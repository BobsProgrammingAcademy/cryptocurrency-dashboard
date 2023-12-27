import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

import CustomButton from '../components/CustomButton';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCoins);

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 280,
          },
        }}
      >
        <Box sx={{ height: '100%', padding: 1 }}>
          <Box width={1} paddingX={2} paddingY={1}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <Avatar
                  variant='rounded'
                  sx={{
                    backgroundColor: deepPurple[600],
                    height: 52,
                    width: 52,
                    marginRight: '15px',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCoins}
                    style={{
                      color: theme.palette.common.white,
                      height: 30,
                      width: 30,
                    }}
                  />
                </Avatar>
                <Typography
                  variant='h3'
                  component='div'
                  color={theme.palette.text.primary}
                  fontWeight='bold'
                  textDecoration='none'
                  flexGrow={1}
                >
                  Crypto Dashboard
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingX={2} paddingY={2}>
            <Box paddingY={1}>
              <CustomButton
                href='/'
                icon={<DashboardIcon />}
                text='Dashboard'
              />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#' icon={<HelpIcon />} text='About' />
            </Box>
            <Box paddingY={1}>
              <CustomButton href='#' icon={<EmailIcon />} text='Contact' />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;
