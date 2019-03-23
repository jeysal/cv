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
        {entries.map(({ from, to, description, location }, i) => (
          <React.Fragment key={i}>
            <div
              style={{
                color: schemeDark2[i % schemeDark2.length],
              }}
            >
              <div
                style={{
                  fontFamily: 'monospace',
                  textAlign: from ? 'left' : 'right',
                }}
              >
                {from} - {to}
              </div>
              {location && (
                <small>
                  <div style={{ textAlign: 'center' }}>{location}</div>
                </small>
              )}
            </div>
            <div>{description}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default History;
