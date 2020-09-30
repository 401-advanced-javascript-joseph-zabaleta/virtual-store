import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: '10px',
        padding: '15px',
        maxWidth: '600px'
    },
    media: {
        height: 400,
    },
});

const styles = {

    description: {

        height: '38px',
        overflow: 'hidden'

    },

    link: {

        'textDecoration': 'none'

    },

    quantity: {

        flexGrow: 1,
        justify: 'flex-start'



    }
}

function Details(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container align='center'>
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
                    <CardContent className={styles.content}>
                        {/* <Toolbar>
                            <div>hello</div>
                            <div>HI</div>
                        </Toolbar> */}
                        <Toolbar>
                            <Typography style={styles.quantity}>
                                Hello
                        </Typography>
                            <Typography>
                                Bye
                        </Typography>
                        </Toolbar>

                    </CardContent>
                </Card>
            </Container >
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    product: state.products.activeItem
})


export default connect(mapStateToProps)(Details)
