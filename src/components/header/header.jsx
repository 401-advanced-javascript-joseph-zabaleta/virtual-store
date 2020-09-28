import React from 'react';

import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({

    root: {

        flexGrow: 1,

    },

    menuButton: {

        marginRight: theme.spacing(2),

    },


    title: {

        flexGrow: 1,

    },

}));

const styles = {

    cart: {
        'marginLeft': '5px'
    }

}


export default function Header() {

    const classes = useStyles();

    return (
        <header>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h3' className={classes.title}>
                        Virtual Store
                    </Typography>
                    <Button color='inherit'>
                        Cart (0)
                        <ShoppingCartIcon style={styles.cart} />
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    )
}
