import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { useQueryParam, BooleanParam } from 'use-query-params';

import * as styles from './ProfilePic.module.css';

const ProfilePic = () => {
  const [showPic = true] = useQueryParam('showPic', BooleanParam);

  return showPic ? (
    <aside className={styles.profilePicWrapper}>
      <StaticImage
        src="../images/profile-pic.jpg"
        alt="Profile picture"
        className={styles.img}
      />
      <div className={styles.subtitle}>
        <p>Picture obscured — equal chances for everyone</p>
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
