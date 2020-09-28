import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


let productsList = [
    {
        category: 'books',
        name: 'Random Book',
        description: 'Some book description........',
        price: 20,
        count: 1,
    },
    {
        category: 'books',
        name: 'Blue Book',
        description: 'Special training Tactics Manual',
        price: 99,
        count: 10,
    },
    {
        category: 'electronics',
        name: 'Processor',
        description: 'Fastest processor known to you.',
        price: 750,
        count: 2,
    },
    {
        category: 'electronics',
        name: 'Power Supply',
        description: 'Gold standard powersupply: 1500W',
        price: 175,
        count: 5,
    },
    {
        category: 'electronics',
        name: 'Speedy Mouse',
        description: 'Computer mouse with the a speedy click response rate',
        price: 50,
        count: 12,
    },
    {
        category: 'Garden',
        name: 'Golden Shovel',
        description: 'The perfect gift your lovely Gold Digger. There is a special gold digger out there that could really benefit from a tool of this power',
        price: 1500,
        count: 1,
    },
    {
        category: 'sports',
        name: 'FootBall',
        description: 'Top quality Football for recreational use',
        price: 15,
        count: 20,
    },
    {
        category: 'sports',
        name: 'BasketBall',
        description: 'Top quality BasketBall for recreational use',
        price: 15,
        count: 20,
    },
]

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '10px'
    },
    media: {
        height: 140,
    },
});

export default function Products() {

    const classes = useStyles();

    return (
        <Container component='main'>
            <Grid
                container
                space={10}
                alignItems='flex-start'
                justify='flex-start'>
                {productsList.map(product => {
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
                                        component='p'>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
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
