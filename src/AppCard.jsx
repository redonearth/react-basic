import React from 'react';
import Card from './components/Card';

export default function AppCard() {
  return (
    <>
      <Card>
        <h1>Card 1</h1>
      </Card>

      <Card>
        <h2>Card 2</h2>
        <p>카드 2</p>
      </Card>

      <Card>
        <h3>Card 3</h3>
        <div
          style={{
            backgroundColor: 'dodgerblue',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
        ></div>
      </Card>
    </>
  );
}
