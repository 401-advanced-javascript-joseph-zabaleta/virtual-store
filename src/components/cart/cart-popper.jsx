import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';

import SimpleCart from './simplecart.js';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
    },
}));

export default function CartPopper() {
    const classes = useStyles();

    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                    <IconButton variant='contained' color='inherit' {...bindToggle(popupState)}>
                        <Badge badgeContent={5} color="secondary">
                            <ShoppingCartIcon fontSize='large' />
                        </Badge>
                    </IconButton>
                    <Popper {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <SimpleCart className={classes.typography} />
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}
