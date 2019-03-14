import React from 'react';

import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import Info from '../components/Info';

const IndexPage = () => (
  <Layout>
    <aside style={{ float: 'right', maxWidth: `7cm`, marginBottom: `1.45rem` }}>
      <ProfilePic />
    </aside>
    <Info />
    <div style={{ clear: 'both' }} />
  </Layout>
);

export default IndexPage;
