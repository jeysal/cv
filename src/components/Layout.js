import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '96ch',
          padding: `0 1rem 0.5rem 1rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
