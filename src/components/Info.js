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
            github
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { author, dateOfBirth, email, github },
      },
    }) => (
      <section>
        <h2>Personal & contact information</h2>
        <div className={styles.infoGrid}>
          <div>Name</div>
          <div>{author}</div>
          <div>Born</div>
          <div>
            {dateOfBirth} (age {age(dateOfBirth)})
          </div>
          <div>Nationality</div>
          <div>German (EU citizenship)</div>
          <div>Languages</div>
          <div>English (fluent), German (native)</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>Email</div>
          <div>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div>GitHub</div>
          <div>
            <a href={`https://github.com/${github}`}>{github}</a>
          </div>
        </div>
      </section>
    )}
  />
);

export default Info;
