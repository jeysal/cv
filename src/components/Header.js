import PropTypes from 'prop-types';
import React from 'react';

import styles from './Header.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.title}>
      <h1>{siteTitle}</h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
