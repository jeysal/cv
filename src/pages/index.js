import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ProfilePic from '../components/ProfilePic';
import Info from '../components/PersonalInfo';
import History from '../components/History';
import Keywords from '../components/Keywords';
import Skills from '../components/Skills';

import * as styles from './index.module.css';
import { QueryParamProvider } from 'use-query-params';
import { SsgAdapter } from '../utils/ssg-query-param-adapter';

const IndexPage = () => (
  <QueryParamProvider adapter={SsgAdapter}>
    <Layout>
      <Seo />
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
  </QueryParamProvider>
);

export default IndexPage;
