import React, { useState } from 'react'
import Chatboard from './Chatboard';
import Sidebar from './Sidebar';
import Model from './base/Model';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function index() {
  const { data } = useSession();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  if (data === null) {
    router.push('/');
  }
  return (
    <>
  <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
    <div className="flex-1 flex flex-col">
      <main className="flex-grow flex flex-row min-h-0">
        {/* ================= Sidebar section ================= */}
        <Sidebar handleOpen={handleOpen} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
        {/* ================= Chat section ================= */}
        <Chatboard handleOpen={handleOpen} open={open} handleClose={handleClose} handleDrawerToggle={handleDrawerToggle}/>
        {/* ================= Model section ================= */}
        <Model handleOpen={handleOpen} open={open} handleClose={handleClose}/>
      </main>
    </div>
  </div>
</>

  )
}

export default index
