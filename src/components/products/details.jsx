import React, { useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { incrementCart } from '../../store/cart.js';

const useStyles = makeStyles((theme) => ({

    root: {
        margin: '10px',
        padding: '15px',
        width: '100%'
    },
    media: {
        height: 400,
    },

    container: {
        width: 600,
        display: 'grid',
        flexDirection: 'column',
        alignItems: 'center'

    },

    list: {

        width: '100%',

    },

    nested: {

        paddingLeft: theme.spacing(4)

    }

}));

const styles = {

    description: {

        height: '38px',
        overflow: 'hidden'

    },

    link: {

        'textDecoration': 'none'

    },

    content: {

        padding: 0,
        display: 'grid',
        alignItems: 'flex-start'

    },

    quantity: {

        flexGrow: 1,
        textAlign: 'left',

    },

    price: {

        flexGrow: 1,
        textAlign: 'right'

    },

    spanTitle: {

        color: 'grey',
        paddingRight: 5

    },

    spanContent: {

        fontWeight: 500,

    },

    button: {

        width: '100%',
        marginLeft: 10,

    }
}

function Details(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {

        setOpen(!open);

    };

    return (
        <React.Fragment>
            <Container className={classes.container} align='center'>
                <Typography
                    variant='h2'
                    align='center'>
                    {props.product.name}
                </Typography>
                <Typography
                    variant='body1'
                    align='center'>
                    {props.product.description}
                </Typography>
                <Card className={classes.root}>
                    <CardMedia
                        component='img'
                        className={classes.media}
                        title={props.product.name}
                        alt={props.product.name}
                        image='https://via.placeholder.com/600x400' />
                    <CardContent style={styles.content}>
                        {/* <Toolbar>
                            <div>hello</div>
                            <div>HI</div>
                        </Toolbar> */}
                        <Toolbar>
                            <Typography style={styles.quantity}>
                                <span style={styles.spanTitle}>
                                    Quantity:
                                </span>
                                <span style={styles.spanContent}>
                                    {props.product.count}
                                </span>
                            </Typography>
                            <Typography style={styles.price}>
                                <span style={styles.spanContent}>
                                    ${props.product.price}
                                </span>
                            </Typography>
                        </Toolbar>

                    </CardContent>
                </Card>

                <Button
                    variant='contained'
                    color='primary'
                    style={styles.button}
                    onClick={() => { props.incrementCart(props.product) }}>
                    Buy
                </Button>

                <br />
                <Typography
                    variant='h5' align='left'>
                    Product Details
                </Typography>


                <List
                    component="nav"
                    className={classes.list}>
                    <Paper square>
                        <ListItem button onClick={handleClick}>
                            <ListItemText primary="Specifications" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>

                    </Paper>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Paper square>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Product Specs go here" />
                                </ListItem>
                            </List>

                        </Paper>
                    </Collapse>
                </List>

            </Container >
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    product: state.products.activeItem
})

const mapDispatchToProps = { incrementCart }

export default connect(mapStateToProps, mapDispatchToProps)(Details)
