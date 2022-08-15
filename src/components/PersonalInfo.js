import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useQueryParam, BooleanParam, StringParam } from 'use-query-params';
import age from 's-age';

import styles from './Info.module.css';

const Info = () => {
  const {
    site: {
      siteMetadata: { author, dateOfBirth, email, github, website },
    },
  } = useStaticQuery(graphql`
    query InfoQuery {
      site {
        siteMetadata {
          author
          dateOfBirth
          email
          github
          website
        }
      }
    }
  `);
  const [showAge = false] = useQueryParam('showAge', BooleanParam);
  const [phone] = useQueryParam('phone', StringParam);

  return (
    <section>
      <h2>Personal & Contact Information</h2>
      <dl className={styles.infoGrid}>
        <dt>Name</dt>
        <dd>{author}</dd>
        {showAge && (
          <>
            <dt>Born</dt>
            <dl>
              {dateOfBirth} (age {age(dateOfBirth)})
            </dl>
          </>
        )}
        <dt>Nationality</dt>
        <dd>German (EU citizenship)</dd>
        <dt>Languages</dt>
        <dd>
          <ol>
            <li>English (fluent)</li>
            <li>German (native)</li>
          </ol>
        </dd>
        <dt className={styles.newSection}>Email</dt>
        <dd className={styles.newSection}>
          <a href={`mailto:${email}`}>{email}</a>
        </dd>
        {phone && (
          <>
            <dt>Phone</dt>
            <dd>{`+${phone}` || '<hidden in public version>'}</dd>
          </>
        )}
        <dt>GitHub</dt>
        <dd>
          <a href={github}>{github}</a>
        </dd>
        <dt>Other links</dt>
        <dd>
          <a href={website}>{website}</a>
        </dd>
      </dl>
    </section>
  );
};

export default Info;