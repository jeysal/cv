import React from 'react';
import { schemeDark2 } from 'd3-scale-chromatic';

import HistoryDiagram from './HistoryDiagram';
import * as infoStyles from './Info.module.css';
import entries from '../data/history';

const History = () => (
  <section>
    <h2>Experience & education</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1cm auto',
        columnGap: '2%',
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
                  display: 'flex',
                  flexWrap: 'wrap',

                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {from && <span style={{ display: 'block' }}>{from} </span>}
                <span
                  style={{
                    display: 'block',
                    flexGrow: 1,
                    textAlign: to ? 'end' : 'start',
                  }}
                >
                  - {to}
                </span>
              </div>
              {location && (
                <div style={{ textAlign: 'center' }}>
                  <small>{location}</small>
                </div>
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
