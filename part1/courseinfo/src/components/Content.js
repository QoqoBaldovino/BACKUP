import React from 'react';

const Content = ({parts}) => {
  return (
    <>
      {
        parts.map(part => 
          <div key = {part.id}>
            <p><b>{part.name}: </b>{part.exercises}</p>
          </div>
        )
      }
    </>
  )
}

export default Content