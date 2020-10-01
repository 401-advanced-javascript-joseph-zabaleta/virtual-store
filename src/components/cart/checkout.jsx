import React from 'react'
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
    },

    card: {
        width: '90%',
        margin: '25px auto'
    },
    textRoot: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: '35ch',

    },

    billingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'

    },

    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,

    },
    dateContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    dateTextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const styles = {

    typoName: {
        flexGrow: 1,
        textAlign: 'left',
        fontWeight: 500,
    },

    toolBar: {

        padding: 0,

    },

    description: {
        marginBottom: '10px'
    },

    checkoutContainer: {
        display: 'flex',
        justifyContent: 'center'
    },


    checkoutButton: {

        width: '30%',
        fontWeight: 400,
        margin: '10px'

    }
}

function Checkout(props) {

    const classes = useStyles();

    let totalPrice = 0;

    return (
        <React.Fragment>
            <Container className={classes.root}>
                <Card className={classes.card}>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Order Summary
                            </Typography>

                        {props.cart.cartList.map(item => {

                            totalPrice += item.price;

                            return (
                                <React.Fragment>
                                    <Toolbar
                                        style={styles.toolBar}>
                                        <Typography
                                            variant='body1'
                                            style={styles.typoName}>
                                            <span>
                                                {item.name}
                                            </span>
                                        </Typography>
                                        <Typography>
                                            <span>
                                                ${item.price}
                                            </span>
                                        </Typography>
                                    </Toolbar>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                        style={styles.description}>
                                        Description Goes here (API does not have this)
                                    </Typography>
                                    <Divider />
                                </React.Fragment>
                            )
                        })}



                        <Toolbar
                            style={styles.toolBar}>


                            <Typography
                                variant='body1'
                                style={styles.typoName}>
                                <span>
                                    Total
                                    </span>
                            </Typography>
                            <Typography>
                                <span>
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </Typography>
                        </Toolbar>


                    </CardContent>

                    <CardActions>



                        <Container className={classes.billingContainer}>

                            <Container className={classes.textContainer}>
                                <Typography variant='h5'>
                                    Billing Address
                                </Typography>
                                <TextField
                                    id="margin-none"
                                    placeholder="Full Name"
                                    className={classes.textField} />
                                <TextField
                                    id="margin-none"
                                    placeholder="Address"
                                    className={classes.textField} />
                                <TextField
                                    id="margin-none"
                                    placeholder="City"
                                    className={classes.textField} />
                                <TextField
                                    id="margin-none"
                                    placeholder="State"
                                    className={classes.textField} />
                                <TextField
                                    id="margin-none"
                                    placeholder="Zip"
                                    className={classes.textField} />
                            </Container>

                            <Container className={classes.textContainer}>
                                <Typography variant='h5'>
                                    Payment Details
                                </Typography>
                                <TextField
                                    id="margin-none"
                                    placeholder="Credit Card # "
                                    className={classes.textField} />
                                <form className={classes.dateContainer} noValidate>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        className={classes.dateTextField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <TextField
                                    id="margin-none"
                                    placeholder="CCV"
                                    className={classes.textField} />
                            </Container>
                        </Container>
                    </CardActions>

                    <Container style={styles.checkoutContainer}>
                        <Button
                            variant='contained'
                            color='primary'
                            style={styles.checkoutButton}>
                            Place your Order
                        </Button>
                    </Container>
                </Card>
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({

    cart: state.cart,

})

export default connect(mapStateToProps)(Checkout);
