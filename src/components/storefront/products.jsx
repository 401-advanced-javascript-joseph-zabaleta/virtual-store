import React from 'react'
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { incrementCart } from '../../store/cart.js';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '10px'
    },
    media: {
        height: 140,
    },
});

const styles = {

    description: {

        height: '38px',
        overflow: 'hidden'

    }

};

function Products(props) {

    const classes = useStyles();

    return (
        <Container component='main'>
            <Grid
                container
                space={10}
                alignItems='flex-start'
                justify='flex-start'>
                {props.products.activeList.map(product => {
                    return (
                        <Grid key={product.name} item xs={12} sm={6} md={4}>
                            <Card className={classes.root}>
                                <CardMedia
                                    component='img'
                                    alt={product.name}
                                    className={classes.media}
                                    image='https://via.placeholder.com/340x140'
                                    title={product.name}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h5'
                                        component='h2'>
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                        style={styles.description}
                                        component='p'>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size='small'
                                        color='primary'
                                        onClick={() => { props.incrementCart(product) }}>
                                        ADD TO CART
                                    </Button>
                                    <Button size='small' color='primary'>
                                        VIEW DETAILS
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

const mapStateToProps = state => ({
    products: state.products,
});

const mapDispatchToProps = { incrementCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products)
