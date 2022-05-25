import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  const [mostVoted, setMostVoted] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const handleChange = (setIndex) => {
    const newIndex = Math.floor(Math.random() * (5 - 0 + 1) + 0)
    setIndex(newIndex);
  }

  const handleVote = (index, points, setPoints, ) => {
    const aux = [...points];
    aux[index] += 1;
    setPoints(aux);
  }

  useEffect(() => {
    const mostVoted = Math.max(...points) 
    if(mostVoted !== 0){
      const index = points.findIndex(point => point === mostVoted)
      console.log(index)
      setMostVoted(index)
    }else{
      setMostVoted(0)
    }
    
  }, [points])


  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[index]}</p>
        <div>
          <button onClick = {() => {handleVote(index, points, setPoints, setIndex)}}>Vote</button>
          <button onClick = {() => {handleChange(setIndex)}}>Next Anecdote</button>
        </div>
        <p>Anecdote with {points[index]} votes</p>
        <div>
        {
          mostVoted === 0 ?
          '' :
          <>
            <h3>Anecdote most voted:</h3>
            <p>{anecdotes[mostVoted]}</p>
            <b>With {points[mostVoted]} votes</b>
          </>
        }
        </div>
      </div>
    </>
  );
}

export default App;
