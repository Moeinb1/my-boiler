import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { HambergerMenu } from 'iconsax-react';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import DashboardMenuItems from '@/app/__constanse/DashboardMenuItems';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const CustomNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      variant="outlined"
      className="flex bg-blue-400 h-14 max-h-14 z-50 mobileSize:justify-start w-full  justify-center text-center  "
    >
      <Toolbar>
        <IconButton
          className="mobileSize:flex hidden"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <HambergerMenu />
        </IconButton>
        <Typography variant="h6">Header</Typography>

        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <div className="flex justify-center mx-4 items-center gap-x-1">
            <Avatar
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className={'bg-orange-500 my-2  mx-auto'}
            >
              MB
            </Avatar>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  deleteCookie('token');
                  router.push('/login');
                }}
              >
                Logout
              </MenuItem>
            </Menu>
            <Typography className="!text-sm">Moein Bagheri</Typography>
          </div>
          <Divider />

          <List className={' min-h-fit'}>
            {DashboardMenuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                {item.nodes.length !== 0 ? (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <ListItemButton>
                        <ListItemIcon className="flex justify-center">
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>{' '}
                    </AccordionSummary>
                    <AccordionDetails>
                      {item?.nodes?.map((item, index) => (
                        <ListItemButton
                          onClick={(e) => {
                            if (item.nodes?.length === 0) {
                              router.push(`${item.path}`);
                            } else {
                              console.log(e.target);
                            }
                          }}
                          key={index}
                        >
                          <ListItemIcon className="flex justify-center">
                            {item.icon}
                          </ListItemIcon>

                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItemButton
                    onClick={(e) => {
                      if (item.nodes?.length === 0) {
                        router.push(`${item.path}`);
                      } else {
                        console.log(e.target);
                      }
                    }}
                  >
                    <ListItemIcon className="flex justify-center">
                      {item.icon}
                    </ListItemIcon>

                    <ListItemText primary={item.title} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
