import React from 'react'
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

const styles = {

    'currentCategoryDescription': {

        'fontSize': '16px',
        'fontWeight': '300',
        'color': 'grey'

    }

};

function CurrentCategory(props) {



    let displayName = props.categories.activeCategory.displayName ? props.categories.activeCategory.displayName + ' Department' : 'Welcome to VS'
    let description = props.categories.activeCategory.description ? props.categories.activeCategory.description : 'Where nothing goes on sale'

    return (
        <React.Fragment>
            <Typography variant='h4' component='h1' align='center'>
                {displayName}
            </Typography>
            <Typography style={styles.currentCategoryDescription} component='p' align='center'>
                {description}
            </Typography>
        </React.Fragment>
    )

};

const mapStateToProps = state => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(CurrentCategory)
