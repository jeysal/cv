import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './Footer.module.css';

const Footer = () => {
  const {
    site: {
      siteMetadata: { author, github },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          github
        }
      }
    }
  `);
  const webVersionUrl = `https://${github}.github.io/cv`;

  return (
    <>
      <hr />
      <footer className={styles.footer}>
        <div className={styles.footerWeb}>
          Built by
          {` `}
          <a href={`https://github.com/${github}`}>{author}</a>
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
