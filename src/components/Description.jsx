import React from 'react';

export default function Description({ oneCard }) {
  
  return (
    <>
      <div>
        {oneCard.title}
      </div>
      <div>
        {oneCard.country}
      </div>
      <div>
        {oneCard.image}
      </div>
      <div>
        {oneCard.description}
      </div>
    </>
  );
}
