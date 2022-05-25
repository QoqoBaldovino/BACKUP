import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Estadisticas = ({good, neutral, bad}) => {

  const total = good + neutral + bad;

  return(
    <div>
      <p><b>Good:</b> {good}</p>
      <p><b>Neutral:</b> {neutral}</p>
      <p><b>Bad:</b> {bad}</p>
      <p><b>All:</b> {total}</p>
      <p><b>Average:</b> {((good-bad)/total).toFixed(2)}</p>
      <p><b>Positive:</b> {((good * 100) / total).toFixed(2)}%</p>
    </div>
  )
}


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (good, setGood) => {
    const newValue = good + 1;
    setGood(newValue);
  }

  const handleNeutral = (neutral, setNeutral) => {
    const newValue = neutral + 1;
    setNeutral(newValue);
  }

  const handleBad = (bad, setBad) => {
    const newValue = bad + 1;
    setBad(newValue);
  }

  return (
    <>
     <h1>Give Feedback</h1>
     <div>
       <Button variant="contained" color="success" onClick= {() => handleGood(good, setGood)}>Good</Button>
       <Button variant="contained" color="secondary" onClick= {() => handleNeutral(neutral, setNeutral)}>Neutral</Button>
       <Button onClick= {() => handleBad(bad, setBad)} variant="outlined" color = "error">Bad</Button>
     </div>
     <Estadisticas good = {good} neutral = {neutral} bad = {bad} />
     
    </>
  );
}

export default App;
