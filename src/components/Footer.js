import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styles from './Footer.module.css';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            author
            github
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { author, github },
      },
    }) => (
      <footer>
        <div className={styles.footerWeb}>
          Built by
          {` `}
          <a href={`https://github.com/${github}`}>{author}</a>
        </div>
        <div className={styles.footerPrint}>
          Web version at{' '}
          <span
            style={{ fontFamily: 'monospace' }}
          >{`https://${github}.github.io/cv/`}</span>
        </div>
      </footer>
    )}
  />
);

export default Footer;
