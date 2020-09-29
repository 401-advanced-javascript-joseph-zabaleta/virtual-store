import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { goHome } from '../../store/nav.js';

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

}));

const styles = {

    cart: {
        'marginLeft': '5px'
    }

}


function Header(props) {

    const classes = useStyles();

    return (
        <header>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h3'
                        className={classes.title}
                        onClick={props.goHome}>
                        Virtual Store
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={5} color="secondary">
                            <ShoppingCartIcon fontSize='large' />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </header>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { goHome };

export default connect(mapStateToProps, mapDispatchToProps)(Header)
