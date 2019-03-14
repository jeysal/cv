import React from 'react';

import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import Info from '../components/Info';
import History from '../components/History';

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flexGrow: 1 }}>
        <Info />
      </div>
      <aside style={{ maxWidth: `7cm`, margin: `2rem`, marginTop: '0' }}>
        <ProfilePic />
      </aside>
    </div>
    <hr />
    <History />
  </Layout>
);

export default IndexPage;
