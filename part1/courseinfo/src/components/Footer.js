import React from 'react';

const Footer = ({parts}) => {
  const excercises = parts.map(part => part.exercises)
  const total = excercises.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return (
    <>
      <p>Total of excercises: <b>{total}</b></p>
    </>
  )
}

export default Footer