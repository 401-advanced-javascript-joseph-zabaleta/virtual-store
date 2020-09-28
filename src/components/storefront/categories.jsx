import React from 'react'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function Categories() {

    let categoryList = [
        {
            normalizedName: 'books',
            diplayName: 'Books',
            description: 'Books Description...'
        },
        {
            normalizedName: 'electronics',
            diplayName: 'Electronics',
            description: 'Electronics Description...'
        },
        {
            normalizedName: 'garden',
            diplayName: 'Garden',
            description: 'Garden Description...'
        },
        {
            normalizedName: 'sports',
            diplayName: 'Sports',
            description: 'Sports Description...'
        }
    ]

    function handleClick(e) {

        e.preventDefault();
        console.log('Clicked!', e.target)

    };

    const styles = {
        'nav': {
            'marginTop': '5px'
        }
    };


    return (
        <nav style={styles.nav}>
            <Breadcrumbs aria-label='breadcrumb'>
                {categoryList.map(cat => {
                    return <Link key={cat.normalizedName} color='inherit' href='#' onClick={handleClick}>
                        {cat.diplayName}
                    </Link>
                })}
            </Breadcrumbs>
        </nav>
    )
}
