import React from 'react'

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const links = {
    github: 'https://github.com/joseph-zabaleta',
    linkedIn: 'https://www.linkedin.com/in/joseph-zabaleta/',
};

const styles = {

    footer: {

        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center'

    }

};

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <Typography>
                &copy;Joseph Zabaleta
            </Typography>
            <Typography>
                <Link href={links.github} color='inherit' rel='noopener' target='_blank'>
                    <GitHubIcon fontSize='large' />
                </Link>
                <Link href={links.linkedIn} color='inherit' color='inherit' rel='noopener' target='_blank'>
                    <LinkedInIcon fontSize='large' />
                </Link>
            </Typography>
        </footer>
    )
};
