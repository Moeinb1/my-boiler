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
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import DashboardMenuItems from '@/app/__constanse/DashboardMenuItems';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function CustomSidebar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerWidth, setDrawerWidth] = React.useState<number>(208);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="max-w-52 z-0 h-full ">
      <Drawer
        className=""
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <div className="flex justify-start ml-4 items-center gap-x-1">
          <Avatar
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className={
              drawerWidth == 80
                ? 'bg-orange-500 my-2 ml-1  mx-auto'
                : 'bg-orange-500 my-2 ml-2  '
            }
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
          {drawerWidth === 208 && (
            <Typography className="!text-sm">Moein Bagheri</Typography>
          )}
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

        <div
          className={
            drawerWidth === 208
              ? 'flex   justify-end !mt-auto ml-auto  '
              : 'flex  rotate-180  justify-end mt-auto '
          }
        >
          <MenuOpenIcon
            onClick={() => {
              if (drawerWidth === 208) {
                setDrawerWidth(80);
              }
              if (drawerWidth === 80) {
                setDrawerWidth(208);
              }
            }}
          />
        </div>
      </Drawer>
    </div>
  );
}
