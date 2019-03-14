import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import age from 's-age';

import styles from './Info.module.css';

const Info = () => (
  <StaticQuery
    query={graphql`
      query InfoQuery {
        site {
          siteMetadata {
            author
            dateOfBirth
            email
            nationality
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { author, dateOfBirth, email, nationality },
      },
    }) => (
      <section>
        <h2>Personal information</h2>
        <div className={styles.infoGrid}>
          <div>Name</div>
          <div>{author}</div>
          <div>Born</div>
          <div>
            {dateOfBirth} (age {age(dateOfBirth)})
          </div>
          <div>Nationality</div>
          <div>{nationality}</div>
          <div>Email</div>
          <div>{email}</div>
        </div>
      </section>
    )}
  />
);

export default Info;
