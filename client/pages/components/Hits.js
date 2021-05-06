import React from 'react'


export function Hits = ({ hits }) => (
  <ol>
    {hits.map(hit => (
      <li key={hit.objectID}>{hit.name}</li>
    ))}
  </ol>
);

const CustomHits = connectHits(Hits);
