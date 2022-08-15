import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { useQueryParam, BooleanParam } from 'use-query-params';

import styles from './ProfilePic.module.css';

const ProfilePic = () => {
  const {
    placeholderImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const [showPic = true] = useQueryParam('showPic', BooleanParam);

  return showPic ? (
    <aside className={styles.profilePicWrapper}>
      <Img fluid={fluid} alt="Profile picture" className={styles.img} />
      <div className={styles.subtitle}>
        <p className={styles.subtitleLarge}>
          Picture obscured — equal chances for everyone
        </p>
        <p className={styles.subtitleWeb}>
          If resume pictures are customary in your country, press the picture to
          reveal
        </p>
        <p className={styles.subtitlePrint}>
          If resume pictures are customary in your country, please visit the web
          version to view the picture
        </p>
      </div>
    </aside>
  ) : null;
};

export default ProfilePic;
