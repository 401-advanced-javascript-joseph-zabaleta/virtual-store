import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { goHome } from '../../store/nav.js';
import CartPopper from '../cart/cart-popper.jsx';

const useStyles = makeStyles((theme) => ({

    root: {

        flexGrow: 1,

    },

    menuButton: {

        marginRight: theme.spacing(2),

    },


    title: {

        flexGrow: 1,
        cursor: 'pointer',

    },

    typography: {

        padding: theme.spacing(2),

    },

    link: {

        textDecoration: 'none',
        color: '#FFF',
        flexGrow: 1,

    }

}));


function Header(props) {

    const classes = useStyles();

    return (
        <header>
            <AppBar position='static'>
                <Toolbar>
                    <Link to='/' className={classes.link}>
                        <Typography
                            variant='h3'
                            color='inherit'
                            className={classes.title}
                            onClick={props.goHome}>
                            Virtual Store
                            </Typography>
                    </Link>
                    <CartPopper />
                </Toolbar>
            </AppBar>
        </header>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { goHome };

export default connect(mapStateToProps, mapDispatchToProps)(Header)
