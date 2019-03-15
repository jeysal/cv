import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ProfilePic from '../components/ProfilePic';
import Info from '../components/Info';
import History from '../components/History';
import Skills from '../components/Skills';

const IndexPage = () => (
  <Layout>
    <SEO />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flexGrow: 1 }}>
        <Info />
      </div>
      <aside
        style={{ maxWidth: `7cm`, marginLeft: `2rem`, marginRight: '2rem' }}
      >
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
