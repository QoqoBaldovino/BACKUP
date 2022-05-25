import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import services from './services/blogs';

function App() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    services.getAll()
      .then(response => {
        const {data} = response;
        setBlogs(data)
      })
  }, [])

  return (
   <>
      <Header />
      <List blogs = {blogs}/>
   </>
  );
}

export default App;
