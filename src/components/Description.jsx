import React from 'react';

export default function Description({ teaTitle = 'Green tea forever!', teaDescription = 'TEA TEA TEA TEA TEA TEA\nTEA TEA TEA' }) {
  return (
    <>
      <div>
        {teaTitle}
      </div>
      <div>
        {teaDescription}
      </div>
    </>
  );
}
