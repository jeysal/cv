import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProfilePic from '../components/ProfilePic';
import Info from '../components/PersonalInfo';
import History from '../components/History';
import Keywords from '../components/Keywords';
import Skills from '../components/Skills';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO />
    <section className={styles.topSection}>
      <div className={styles.infoWrapper}>
        <Info />
      </div>
      <ProfilePic />
    </section>
    <hr />
    <Keywords />
    <hr />
    <History />
    <hr />
    <Skills />
  </Layout>
);

export default IndexPage;
