import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from 'next-auth/react';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button } from "@mui/base";
import { Box, Divider } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

const users = [{ name: 'Jay', message: 'Hello, Darshit' }, { name: 'Darshit', message: 'Hello, Jay' }]
const drawerWidth = 260;

function ResponsiveDrawer({ handleOpen, handleDrawerToggle, mobileOpen }) {
  const [searchuser, setsearchUser] = useState(null);
  const expr = new RegExp(searchuser, 'i');
  const filteredUsers = users.filter(user => expr.test(user.name));

  const { data } = useSession();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <div className="flex flex-col flex-none bg-[#111827] text-white h-screen md:hidden">
      {/* ============= Navigation section ============= */}
      <div className="header px-4 py-2 flex flex-row justify-between items-center flex-none">
        <div
          className="w-16 h-16 relative flex flex-shrink-0"
          style={{ filter: "invert(100%)" }}
        >
          <img
            className="rounded-full w-full h-full object-cover"
            alt="ravisankarchinnam"
            src="https://avatars3.githubusercontent.com/u/22351907?s=60"
          />
        </div>
        <p className="text-md font-bold">
          Messenger
        </p>
        <button onClick={handleOpen} className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 md:block ">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
          </svg>
        </button>
      </div>
      {/* ============= Search section ============= */}
      <div className="search-box px-4 py-2 flex-none">
        <form>
          <div className="relative">
            <label>
              <input
                onChange={(e) => { setsearchUser(e.target.value) }}
                className="search-bar rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                type="text"
                defaultValue=""
                placeholder="Search"
              />
              <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="#bbb"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </span>
            </label>
          </div>
        </form>
      </div>
      {/* ============= Search fillter section ============= */}
      <div className="flex justify-center my-2">
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button className="py-2 px-4 hover:bg-gray-800">All</Button>
          <Button className="py-2 px-4 hover:bg-gray-800">Online</Button>
          <Button className="py-2 px-4 hover:bg-gray-800">Pendding</Button>
        </ButtonGroup>
      </div>
      <Divider color='#1D4ED8' />
      {/* ============= User-list section ============= */}
      <div className="contacts p-2 flex-1 overflow-y-scroll h-[23rem]">
        {
          filteredUsers.length > 0 ? filteredUsers.map((user) => (
            <div key={user.name} className="flex justify-between text-white items-center p-3 hover:bg-gray-800 rounded-lg relative cursor-pointer">
              <div className="w-12 h-12 relative flex flex-shrink-0">
                <img
                  className="shadow-md rounded-full w-full h-full object-cover"
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  alt=""
                />
                <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                  <div className="bg-green-500 rounded-full w-3 h-3" />
                </div>
              </div>
              <div className="flex-auto min-w-0 ml-4 mr-6">
                <p className="font-bold">{user.name}</p>
                <div className="flex items-center text-sm font-bold">
                  <div className="min-w-0">
                    <p className="truncate">{user.message}</p>
                  </div>
                  <p className="ml-2 whitespace-no-wrap absolute inset-y-4 right-3">10min</p>
                </div>
              </div>
              <div className="bg-blue-700 w-3 h-3 absolute inset-y-10 right-3 rounded-full flex flex-shrink-0 " />
            </div>
          )) : users.map((user) => (
            <div key={user.name} className="flex justify-between text-white items-center p-3 hover:bg-gray-800 rounded-lg relative cursor-pointer">
              <div className="w-12 h-12 relative flex flex-shrink-0">
                <img
                  className="shadow-md rounded-full w-full h-full object-cover"
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  alt=""
                />
                <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                  <div className="bg-green-500 rounded-full w-3 h-3" />
                </div>
              </div>
              <div className="flex-auto min-w-0 ml-4 mr-6">
                <p className="font-bold">{user.name}</p>
                <div className="flex items-center text-sm font-bold">
                  <div className="min-w-0">
                    <p className="truncate">{user.message}</p>
                  </div>
                  <p className="ml-2 whitespace-no-wrap absolute inset-y-4 right-3">10min</p>
                </div>
              </div>
              <div className="bg-blue-700 w-3 h-3 absolute inset-y-10 right-3 rounded-full flex flex-shrink-0 " />
            </div>
          ))
        }
      </div>
      {/* ============= Bottom-navigation section ============= */}
      <div className="flex flex-row items-center p-3">
        <div>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar alt="user-image" src={data?.user.image} />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{ sx: { overflow: 'visible', bgcolor: '#1F2937', color: 'white', '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1, } } }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose} className="hover:bg-[#111827]">
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose} className="hover:bg-[#111827]">
              <Avatar /> My account
            </MenuItem>
            <Divider className="bg-white" />
            <MenuItem onClick={handleClose} className="hover:bg-[#111827]">
              <ListItemIcon>
                <Settings fontSize="small" className="text-white" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem className="hover:bg-[#111827]" onClick={() => signOut()} >
              <ListItemIcon>
                <Logout fontSize="small" className="text-white" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
        <div className="inline-flex">
          {data?.user.username}
        </div>
      </div>
    </div>
  )
  return (
    <Box>
      {/* ========== Sidebar ========= */}
      <div className="flex flex-col flex-none sm:w-60 lg:w-80 hidden md:block">
        <div className="header px-4 py-2 flex flex-row justify-between items-center flex-none">
          <div
            className="w-16 h-16 relative flex flex-shrink-0"
            style={{ filter: "invert(100%)" }}
          >
            <img
              className="rounded-full w-full h-full object-cover"
              alt="ravisankarchinnam"
              src="https://avatars3.githubusercontent.com/u/22351907?s=60"
            />
          </div>
          <p className="text-md font-bold">
            Messenger
          </p>
          <button onClick={handleOpen} className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block ">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
            </svg>
          </button>
        </div>
        {/* ============= Search section ============= */}
        <div className="search-box px-4 py-2 flex-none">
          <form>
            <div className="relative">
              <label>
                <input
                  onChange={(e) => { setsearchUser(e.target.value) }}
                  className="search-bar rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                  type="text"
                  defaultValue=""
                  placeholder="Search"
                />
                <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      fill="#bbb"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                    />
                  </svg>
                </span>
              </label>
            </div>
          </form>
        </div>
        {/* ============= Search fillter section ============= */}
        <div className="flex justify-center my-2">
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button className="py-2 px-4 hover:bg-gray-800">All</Button>
            <Button className="py-2 px-4 hover:bg-gray-800">Online</Button>
            <Button className="py-2 px-4 hover:bg-gray-800">Pendding</Button>
          </ButtonGroup>
        </div>
        <Divider color='#454346' />
        {/* ============= User-list section ============= */}
        <div className="contacts p-2 flex-1 overflow-y-scroll h-[23rem]">
          {
            filteredUsers.length > 0 ? filteredUsers.map((user) => (
              <div key={user.name} className="flex justify-between text-white items-center p-3 hover:bg-gray-800 rounded-lg relative cursor-pointer">
                <div className="w-12 h-12 relative flex flex-shrink-0">
                  <img
                    className="shadow-md rounded-full w-full h-full object-cover"
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    alt=""
                  />
                  <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                    <div className="bg-green-500 rounded-full w-3 h-3" />
                  </div>
                </div>
                <div className="flex-auto min-w-0 ml-4 mr-6">
                  <p className="font-bold">{user.name}</p>
                  <div className="flex items-center text-sm font-bold">
                    <div className="min-w-0">
                      <p className="truncate">{user.message}</p>
                    </div>
                    <p className="ml-2 whitespace-no-wrap absolute inset-y-4 right-3">10min</p>
                  </div>
                </div>
                <div className="bg-blue-700 w-3 h-3 absolute inset-y-10 right-3 rounded-full flex flex-shrink-0 " />
              </div>
            )) : users.map((user) => (
              <div key={user.name} className="flex justify-between text-white items-center p-3 hover:bg-gray-800 rounded-lg relative cursor-pointer">
                <div className="w-12 h-12 relative flex flex-shrink-0">
                  <img
                    className="shadow-md rounded-full w-full h-full object-cover"
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    alt=""
                  />
                  <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                    <div className="bg-green-500 rounded-full w-3 h-3" />
                  </div>
                </div>
                <div className="flex-auto min-w-0 ml-4 mr-6">
                  <p className="font-bold">{user.name}</p>
                  <div className="flex items-center text-sm font-bold">
                    <div className="min-w-0">
                      <p className="truncate">{user.message}</p>
                    </div>
                    <p className="ml-2 whitespace-no-wrap absolute inset-y-4 right-3">10min</p>
                  </div>
                </div>
                <div className="bg-blue-700 w-3 h-3 absolute inset-y-10 right-3 rounded-full flex flex-shrink-0 " />
              </div>
            ))
          }
        </div>
        {/* ============= Bottom-navigation section ============= */}
        <div className="flex flex-row items-center p-3">
          <div>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar alt="user-image" src={data?.user.image} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{ sx: { overflow: 'visible', bgcolor: '#1F2937', color: 'white', '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1, } } }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose} className="hover:bg-[#111827]">
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose} className="hover:bg-[#111827]">
                <Avatar /> My account
              </MenuItem>
              <Divider className="bg-white" />
              <MenuItem onClick={handleClose} className="hover:bg-[#111827]">
                <ListItemIcon>
                  <Settings fontSize="small" className="text-white" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem className="hover:bg-[#111827]" onClick={() => signOut()} >
                <ListItemIcon>
                  <Logout fontSize="small" className="text-white" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
          <div className="inline-flex">
            {data?.user.username}
          </div>
        </div>
      </div>
      {/* ========== Sidebar for mobile ========= */}
      <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
export default ResponsiveDrawer;