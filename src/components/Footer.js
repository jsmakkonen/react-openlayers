import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer>
        <div className="container">
            <div className="row m-auto">
                <div className="h3 my-auto text-light footext" href="/">{props.subtitle}</div>
            </div>
        </div>
    </footer>
);

Footer.defaultProps = {
    subtitle: 'Subtitle'
};

Footer.propTypes = {
    subtitle: PropTypes.string
};

export default Footer;