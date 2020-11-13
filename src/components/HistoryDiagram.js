import * as React from 'react';
import { schemeDark2 } from 'd3-scale-chromatic';
import addMonths from 'date-fns/addMonths';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';

import entries, { start } from '../data/history';
import styles from './HistoryDiagram.module.css';

const end = addMonths(new Date(), 1);
const totalMonths = differenceInCalendarMonths(end, start);

const HistoryDiagram = () => (
  <div role="presentation" className={styles.diagram}>
    {entries.map(({ from, to }, i) => {
      const backgroundColor = schemeDark2[i % schemeDark2.length];

      const monthsBeforeFrom = differenceInCalendarMonths(
        (from && new Date(from)) || start,
        start,
      );
      const monthsAfterTo = differenceInCalendarMonths(
        end,
        (to && addMonths(new Date(to), 1)) || end,
      );

      const topPercent = `${(monthsAfterTo * 100) / totalMonths}%`;
      const bottomPercent = `${(monthsBeforeFrom * 100) / totalMonths}%`;

      return (
        <div
          key={i}
          className={styles.entry}
          style={{
            gridTemplateRows: `${topPercent} auto ${bottomPercent}`,
          }}
        >
          <div className={styles.bar} style={{ backgroundColor }} />
        </div>
      );
    })}
  </div>
);

export default HistoryDiagram;
