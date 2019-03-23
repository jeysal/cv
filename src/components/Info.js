import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useQueryParam, StringParam } from 'use-query-params';
import age from 's-age';

import styles from './Info.module.css';

const Info = () => {
  const {
    site: {
      siteMetadata: { author, dateOfBirth, email, github },
    },
  } = useStaticQuery(graphql`
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
  `);
  const [phone] = useQueryParam('phone', StringParam);

  return (
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
        <small>&nbsp;</small>
        <small>&nbsp;</small>
        <div>Email</div>
        <div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>Phone</div>
        <div>{(phone && `+${phone}`) || '<hidden in public version>'}</div>
        <div>GitHub</div>
        <div>
          <a href={`https://github.com/${github}`}>{github}</a>
        </div>
      </div>
    </section>
  );
};

export default Info;
