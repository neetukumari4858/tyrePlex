import React, { useState } from 'react';
import { IconButton, Toolbar, Button, Typography, Menu, MenuItem, Drawer, List, Divider, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { menuData } from "../components/data"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    color: "white",
  },
  toolbar: {
    minHeight: 64,
    backgroundColor: "#2874f0"
  },
  logo: {
    height: 65,
  },
  drawerList: {
    width: 250,
  },
  closeIcon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    height: 30
  },
  dropdown: {
    listStyle: 'none',
    backgroundColor: 'white',
  },
  dropdownItem: {
    padding: 5,
  },
});

const Header = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEls, setAnchorEls] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = (event, name) => {
    setAnchorEls(prevState => ({
      ...prevState,
      [name]: prevState[name] ? null : event.currentTarget
    }));
  };

  const handleMenuClose = (name) => {
    setAnchorEls(prevState => ({ ...prevState, [name]: null }));
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleClick = (event, name) => {
    setAnchorEls((prevState) => ({
      ...prevState,
      [name]: prevState[name] ? null : event.currentTarget,
    }));
  };
  const handleMenuSelect = (category, brand) => {
    navigate(`/products/${category}/${brand}`);
  };

  const drawerContent = (
    <div className={classes.drawerList} onKeyDown={toggleDrawer(false)}>
      <div className={classes.closeIcon}>
        <Typography variant='h6' sx={{
          color: "#2874f0",

        }} >
          TyreShop
        </Typography>
        <CloseIcon onClick={toggleDrawer(false)} />
      </div>
      <Divider />
      <Container>
        <List>
          {menuData.map((menu, index) => (
            <div
              key={index}
              style={{ position: 'relative' }}
            >
              <Button
                color="inherit"
                aria-controls={`${menu.name}-menu`}
                aria-haspopup="true"
                startIcon={menu.img}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  '& .MuiButton-endIcon': {
                    margin: 0,
                  },
                }}
                onClick={(e) => handleToggleDropdown(e, menu.name)}
              >
                {`${menu.name} Tyre`}
              </Button>
              {anchorEls[menu.name] && (
                <ul className={classes.dropdown}>
                  {menu.items.map((item, subIndex) => (
                    <Typography key={subIndex} className={classes.dropdownItem} onClick={() => handleMenuSelect(menu.name, item)}> {`${item} Tyre`}</Typography>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
  return (
    <div>
      <Toolbar className={classes.toolbar}>
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{
                color: "white",
              }} />
            </IconButton>
            <Typography className={classes.title} variant='h6' >
              TyreShop
            </Typography>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <>
            <Typography className={classes.title} variant='h6'>
              TyreShop
            </Typography>
            {menuData.map((menu, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <Button
                  aria-controls={`${menu.name}-menu`}
                  aria-haspopup="true"
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    color: "white",
                    '& .MuiButton-endIcon': {
                      margin: 0,
                      color: "white"
                    },
                  }}
                  onClick={(e) => handleClick(e, menu.name)}
                >
                  {`${menu.name} Tyre`}
                </Button>
                <Menu
                  id={`${menu.name}-menu`}
                  anchorEl={anchorEls[menu.name]}
                  open={Boolean(anchorEls[menu.name])}
                  onClose={() => handleMenuClose(menu.name)}
                >
                  {menu.items.map((item, subIndex) => (
                    <MenuItem key={subIndex} onClick={() => handleMenuSelect(menu.name, item)}>
                      {`${item} Tyre`}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ))}
          </>
        )}
        <IconButton>
          <AccountCircleIcon sx={{
            color: "white",
          }} />
        </IconButton>
      </Toolbar>
    </div>
  );
};

export default Header;