import * as React from 'react';

import HistoryDiagram from './HistoryDiagram';

const History = () => (
  <section>
    <h2>Education & experience</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1cm auto',
        columnGap: '1cm',
      }}
    >
      <aside>
        <HistoryDiagram />
      </aside>
      TODO
    </div>
  </section>
);

export default History;
