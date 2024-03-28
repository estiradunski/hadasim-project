
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
  const navigate = useNavigate()
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <p style={{ marginRight: '15px' }}>Corona management system</p>
          </Typography>
          <div>
            <NavLink to="/logIn_manager" onClick={() => navigate('/logIn_manager')} style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>MANAGER</NavLink>
            <NavLink to="/logIn" onClick={() => navigate('/logIn')} style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>CLIENT</NavLink>
            <NavLink to="/home_page" onClick={() => navigate('/home_page')} style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>HOME PAGE</NavLink>
          </div>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate('/logIn')}>My details</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

//  <ListItemAvatar>
//               <Avatar alt="Profile Picture" src={""} />
//             </ListItemAvatar>