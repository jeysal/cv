import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './ProfilePic.module.css';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const ProfilePic = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile-pic.png" }) {
          childImageSharp {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Profile picture"
          className={styles.img}
        />
        <div className={styles.subtitle}>
          picture blurred - equal chances for everyone
          <div className={styles.subtitleWeb}>press to reveal</div>
          <div className={styles.subtitlePrint}>
            visit web version to view picture
          </div>
        </div>
      </div>
    )}
  />
);
export default ProfilePic;
