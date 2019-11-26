import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <nav className="header navbar">
        <div className="container">
            <div className="row m-auto">
                <div className="h3 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;