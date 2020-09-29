import React from 'react'
import { connect } from 'react-redux';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import { changeActiveCategory } from '../../store/categories.js';
import CurrentCategory from './current-category.jsx';

function Categories(props) {

    const styles = {

        'nav': {
            'marginTop': '5px',
        },

        'breadcrumb': {
            'marginLeft': '15px',
        }

    };


    return (
        <nav style={styles.nav}>
            <Breadcrumbs separator='|' aria-label='breadcrumb' style={styles.breadcrumb}>
                {props.categories.list.map(cat => {

                    const isActive = cat.normalizedName === props.categories.activeCategory.normalizedName


                    return (
                        <Link
                            key={cat.normalizedName}
                            color={isActive ? 'primary' : 'inherit'}
                            href='#'
                            onClick={() => { props.changeActiveCategory(cat) }}>
                            {cat.displayName}
                        </Link>
                    )
                })}
            </Breadcrumbs>
            <CurrentCategory />
        </nav>
    )
}

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
