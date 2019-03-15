import * as React from 'react';
import { schemeDark2 } from 'd3-scale-chromatic';

import HistoryDiagram from './HistoryDiagram';
import infoStyles from './Info.module.css';
import entries from '../data/history';

const History = () => (
  <section>
    <h2>Education & experience</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1cm auto',
        columnGap: '5mm',
      }}
    >
      <aside>
        <HistoryDiagram />
      </aside>
      <div className={infoStyles.infoGrid}>
        {entries.map(({ from, to, description }, i) => (
          <>
            <div
              style={{
                fontFamily: 'monospace',
                color: schemeDark2[i % schemeDark2.length],
                textAlign: from ? 'left' : 'right',
              }}
            >
              {from} - {to}
            </div>
            <div>{description}</div>
          </>
        ))}
      </div>
    </div>
  </section>
);

export default History;
