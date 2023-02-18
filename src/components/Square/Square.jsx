import React from 'react';

import './Square.css';

export default function Square({ value, onClick }) {
  return (
    <>
      <section className="square">
        <button className="square" onClick={ onClick }>{ value }</button>
      </section>
    </>
  );
}
