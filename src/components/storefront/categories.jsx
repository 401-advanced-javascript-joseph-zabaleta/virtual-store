import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import CurrentCategory from './current-category.jsx';
import { changeActiveCategory } from '../../store/categories.js';
import { getCategories } from '../../store/categories.js';

function Categories(props) {

    const styles = {

        'nav': {
            'marginTop': '5px',
        },

        'breadcrumb': {
            'marginLeft': '15px',
        }

    };

    let getCategories = props.getCategories;

    useEffect(() => {
        getCategories()

    }, [getCategories])

    return (
        <nav style={styles.nav}>
            <Breadcrumbs separator='|' aria-label='breadcrumb' style={styles.breadcrumb}>
                {props.categories.list.map(cat => {

                    const isActive = cat.name === props.categories.activeCategory.name

                    return (
                        <Link
                            key={cat._id}
                            color={isActive ? 'primary' : 'inherit'}
                            href='#'
                            onClick={() => { props.changeActiveCategory(cat) }}>
                            {cat.name}
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

const mapDispatchToProps = { changeActiveCategory, getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
