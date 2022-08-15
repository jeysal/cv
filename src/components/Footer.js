import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Footer.module.css';

const Footer = () => {
  const {
    site: {
      siteMetadata: { author, website },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          website
        }
      }
    }
  `);
  const webVersionUrl = `https://cv.jeys.al/`;

  return (
    <>
      <hr />
      <footer className={styles.footer}>
        <div className={styles.footerWeb}>
          Built by
          {` `}
          <a href={website}>{author}</a>
        </div>
        <div className={styles.footerPrint}>
          Web version at{' '}
          <a href={webVersionUrl}>
            <code>{webVersionUrl}</code>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
