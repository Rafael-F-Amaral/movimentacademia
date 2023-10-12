// Seta.tsx

import React from 'react';

const Seta: React.FC<{ direction: string }> = ({ direction }) => {
  const setaStyles: React.CSSProperties = {
    display: 'inline-block',
    fontSize: '24px',
    lineHeight: 1,
  };

  let setaDirectionStyles: React.CSSProperties = {};

  if (direction === 'n') {
    setaDirectionStyles = { content: '\u2191' };
  } else if (direction === 'ne') {
    setaDirectionStyles = { content: '\u2197' };
  } else if (direction === 'l') {
    setaDirectionStyles = { content: '\u2192' };
  } else if (direction === 'se') {
    setaDirectionStyles = { content: '\u2198' };
  } else if (direction === 's') {
    setaDirectionStyles = { content: '\u2193' };
  } else if (direction === 'sw') {
    setaDirectionStyles = { content: '\u2199' };
  } else if (direction === 'w') {
    setaDirectionStyles = { content: '\u2190' };
  } else if (direction === 'nw') {
    setaDirectionStyles = { content: '\u2196' };
  }

  return (
    <div style={{ ...setaStyles, ...setaDirectionStyles }}></div>
  );
};

export default Seta;
