import React from 'react'
import { connect } from 'react-redux';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import { changeActiveCategory } from '../../store/categories.js';

function Categories(props) {

    const styles = {
        'nav': {
            'marginTop': '5px',
        }
    };


    return (
        <nav style={styles.nav}>
            <Breadcrumbs separator='|' aria-label='breadcrumb'>
                {props.categories.list.map(cat => {

                    const isActive = cat.normalizedName === props.categories.activeCategory.normalizedName


                    return (
                        <Link
                            key={cat.normalizedName}
                            color={isActive ? 'primary' : 'inherit'}
                            href='#'
                            onClick={() => { props.changeActiveCategory(cat) }}>
                            {cat.diplayName}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        </nav>
    )
}

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
