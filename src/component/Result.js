import React from 'react';

const Result = ({ score, playAgain,counter }) => (
  

  <div className='score-board'>

    <div className='score'>You scored {score}/ {counter} </div>
    <button className='playBtn' onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
