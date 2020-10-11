import React, { useState } from 'react';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './navbar.css';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();
    const { uid, photoURL } = useSelector(state => state.auth);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        dispatch(startLogout());
        handleClose();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#03a9f4', color: 'white' }}>
            <Link to="/auth/login" className="links">
                <IconButton color="inherit" style={{ outline: 0 }}>
                    <Home />
                </IconButton>

            </Link>
            <button className="navbar-toggler itemBackground" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {uid !== undefined ?
                        (<li className="nav-item">
                            <IconButton color="inherit" style={{ outline: 0 }} onClick={handleMenu}>
                                <Avatar alt="Remy Sharp" sizes="large" src={photoURL} />
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
                                open={open}
                                onClose={handleClose}
                            >
                                <Link to="/ajustes" className="links" style={{ color: 'black' }}>
                                    <MenuItem onClick={handleClose}>
                                        Ajustes
                                </MenuItem>
                                </Link>
                                <MenuItem onClick={handleLogOut}>
                                    Salir
                                </MenuItem>
                            </Menu>
                        </li>)
                        : <div className="row">
                            <li className="nav-item">
                                <Link to="/auth/login" className="links">
                                    <Button style={{ outline: 0, color: "white", borderRadius: 150 }}>
                                        Iniciar Sesión
                                </Button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/auth/register" className="links">
                                    <Button style={{ outline: 0, color: "white", borderRadius: 150 }}>
                                        Registrarse
                                    </Button>
                                </Link>
                            </li>
                        </div>
                    }
                </ul>
            </div>

        </nav >

        /* <IconButton>
                <AccountCircle />
            </IconButton>

            <Typography variant="h6" >
                Inicio
                    </Typography>*/
    )
}
