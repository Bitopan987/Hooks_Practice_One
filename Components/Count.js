import React from 'react';

function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return <h2>Text - {count}</h2>;
}

export default React.memo(Count);
