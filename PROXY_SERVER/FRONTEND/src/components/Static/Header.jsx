import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import {
    Menu,
    AppBar,
    Button,
    Toolbar,
    MenuItem,
    Typography,
    IconButton,
    ButtonGroup,
    useMediaQuery,
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
} from '@material-ui/icons'
import useStylesHeader from '../../assets/styles/components/Header';
import { getUserLoginStatus } from '../../redux/user/Selector';
import { cleanList } from '../../redux/movie/Slice';
import { logout } from '../../redux/user/Slice';

const PROTOCOL = process.env.PROTOCOL;
const PROXY_SERVER = process.env.PROXY_SERVER;
const WITH_CREDENTIALS = process.env.WITH_CREDENTIALS;

const Header = () => {

    const theme = useTheme();
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStylesHeader();
    const isLog = useSelector(getUserLoginStatus);
    const [openMenu, setOpenMenu] = useState(null);
    const [queryMatch, setQueryMatch] = useState(true);
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const handlerCloseMenu = () => setOpenMenu(null);
    const handlerOpenMenu = event => setOpenMenu(event.target);
    const handlerLogout = async () => {
        try {
            await axios.post(
                `${PROTOCOL}://${PROXY_SERVER}/auth/logout`,
                { withCredentials: WITH_CREDENTIALS }
            );
        } catch (err) {
            history.push('/login');
            console.log(err);
        } finally {
            dispatch(logout());
            dispatch(cleanList());
            handlerCloseMenu();
        }
    }
    const handlerRoute = link => () => {
        history.push(link);
        handlerCloseMenu();
    }

    useLayoutEffect(() => {
        setQueryMatch(matches);
    }, [matches]);

    return (
        <>
            <AppBar
                elevation={0}
                position="static"
                color="transparent"
                className={classes.header}
            >
                <Toolbar>
                    <div className={!queryMatch ? classes.headerItem : ''} >
                        <IconButton color="inherit" onClick={handlerRoute('/')}>
                            <HomeIcon />
                        </IconButton>
                    </div>
                    <Typography variant="h5" className={classes.headerTitle}>
                        Movie Time
                    </Typography>
                    {
                        queryMatch ?
                            <>
                                <IconButton color="inherit" onClick={handlerOpenMenu}>
                                    <MenuIcon />
                                </IconButton>
                                {
                                    isLog ?

                                        <Menu
                                            anchorEl={openMenu}
                                            open={Boolean(openMenu)}
                                            onClose={handlerCloseMenu}
                                        >
                                            <MenuItem onClick={handlerRoute('/moviemenu')}>Menu</MenuItem>
                                            <MenuItem onClick={handlerLogout}>Logout</MenuItem>
                                        </Menu>
                                        : <Menu
                                            anchorEl={openMenu}
                                            open={Boolean(openMenu)}
                                            onClose={handlerCloseMenu}
                                        >
                                            <MenuItem onClick={handlerRoute('/login')}>Login</MenuItem>
                                            <MenuItem onClick={handlerRoute('/signin')}>Signin</MenuItem>
                                        </Menu>

                                }
                            </>
                            : isLog ?
                                <ButtonGroup>
                                    <Button onClick={handlerRoute('/moviemenu')} className={classes.headerButton}>Menu</Button>
                                    <Button onClick={handlerLogout} className={classes.headerButton}>Logout</Button>
                                </ButtonGroup>

                                : <ButtonGroup>
                                    <Button onClick={handlerRoute('/login')} className={classes.headerButton}>Login</Button>
                                    <Button onClick={handlerRoute('/signin')} className={classes.headerButton}>Signin</Button>
                                </ButtonGroup>
                    }
                </Toolbar>
            </AppBar >
        </>
    );
}

export default Header;