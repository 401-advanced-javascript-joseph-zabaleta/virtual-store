import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import SimpleCart from './simplecart.jsx';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
    },
}));

function CartPopper(props) {

    const classes = useStyles();

    return (

        <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                    <IconButton variant='contained' color='inherit' {...bindTrigger(popupState)}>
                        <Badge badgeContent={props.cart.cartList.length} color="secondary">
                            <ShoppingCartIcon fontSize='large' />
                        </Badge>
                    </IconButton>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >

                        <Paper>
                            <SimpleCart className={classes.typography} />
                        </Paper>
                    </Popover>

                </div>
            )}
        </PopupState>

    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
})

export default connect(mapStateToProps)(CartPopper)
