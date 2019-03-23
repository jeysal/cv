import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProfilePic from '../components/ProfilePic';
import Info from '../components/Info';
import History from '../components/History';
import Skills from '../components/Skills';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className={styles.topSection}>
      <div className={styles.infoWrapper}>
        <Info />
      </div>
      <aside className={styles.profilePicWrapper}>
        <ProfilePic />
      </aside>
    </div>
    <hr />
    <History />
    <hr />
    <Skills />
  </Layout>
);

export default IndexPage;
