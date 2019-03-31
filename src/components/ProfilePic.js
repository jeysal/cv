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
  const [showPic] = useQueryParam('showPic', BooleanParam);

  return showPic ? (
    <aside className={styles.profilePicWrapper}>
      <Img fluid={fluid} alt="Profile picture" className={styles.img} />
      <div className={styles.subtitle}>
        <div className={styles.subtitleLarge}>
          picture blurred - equal chances for everyone
        </div>
        <div className={styles.subtitleWeb}>press to reveal</div>
        <div className={styles.subtitlePrint}>
          visit web version to view picture
        </div>
      </div>
    </aside>
  ) : null;
};

export default ProfilePic;
