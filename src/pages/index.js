import React from 'react';

import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <ProfilePic />
    </div>
  </Layout>
);

export default IndexPage;
