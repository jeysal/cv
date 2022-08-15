import React from 'react';
import { schemeDark2 } from 'd3-scale-chromatic';

import HistoryDiagram from './HistoryDiagram';
import infoStyles from './Info.module.css';
import entries from '../data/history';

const History = () => (
  <section>
    <h2>Experience & education</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1cm auto',
        columnGap: '5mm',
      }}
    >
      <HistoryDiagram />
      <ol className={infoStyles.infoGrid}>
        {entries.map(({ from, to, description, location }, i) => (
          <li key={i}>
            <div
              style={{
                marginBottom: '0.25rem',
                color: schemeDark2[i % schemeDark2.length],
              }}
            >
              <div
                style={{
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
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
            <div style={{ lineHeight: '1.4em', marginBottom: '0.25rem' }}>
              {description}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default History;
