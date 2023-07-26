import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Image from "next/image";
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

export default function BasicModal({ handleOpen, open, handleClose }) {
    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box className='absolute top-[30%] left-[50%] w-80 md:w-96 text-gray-200 bg-gray-900 p-5 border border-black translate-x-[-50%] translate-y-[-50%]'>
                    <div className="search-box px-4 py-2 flex-none">
                        <div className="relative">
                            <label>
                                <input className="search-bar rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in" type="text" defaultValue="" placeholder="Add friends with there id....." />
                                <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                                        <path fill="#bbb" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className='w-full my-2'>
                        <img src="/assets/images/searchFriend.png"/>
                    </div>
                    {/* <div className="flex justify-between items-center p-3 rounded-lg relative">
                        <div className="w-12 h-12 relative flex flex-shrink-0">
                            <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/97.jpg" alt="profile-photo" />
                        </div>
                        <div className="flex-auto min-w-0 ml-4 mr-6">
                            <p className="font-bold">Jay</p>
                            <div className="flex items-center text-sm font-bold">
                                <Tooltip title="Accept Request" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 400 }}>
                                    <button className="whitespace-no-wrap absolute inset-y-3 right-3 cursor-pointer">
                                        <IconButton>
                                            <AddTaskIcon color="success" />
                                        </IconButton>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Send Request" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 400 }}>
                                    <button className="whitespace-no-wrap absolute inset-y-3 right-12 cursor-pointer">
                                        <IconButton>
                                            <GroupAddIcon color="success" />
                                        </IconButton>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    </div> */}
                </Box>
            </Modal>
        </div>
    );
}
