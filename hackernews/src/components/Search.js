import React, {useState, useEffect} from "react";
import axios from 'axios';
import Searchbar from "./Searchbar";
import List from "./List";

export const Search = () => {

    
    // const URL = 'http://localhost:8000/data'
    const [searchWord, setSearchWord] = useState('react');
    const [error, setError] = useState([])
    const [value, setValue] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({hits : [] });
    
    const URL = `http://hn.algolia.com/api/v1/search?query=${searchWord}`
//   const URL = `http://hn.algolia.com/api/v1/search?query=${searchWord}`
  
  useEffect(() =>{

    axios(URL)
        .then((res) => setData(res.data.hits))
        .catch((err) =>{
            setError(err);
        })
    
  },[searchWord])



    const handleChange = (e)=>{
    setValue(e.target.value)
    console.log(value)
    } 

    const handleClick = (e)=>{
    e.preventDefault();
    setSearchWord(value);
    } 


return (
    <div className="App">
        <h1>Welcome to React searchbar</h1>
        <Searchbar handleClick={handleClick} handleChange={handleChange} value={value}/>
       
        {/*if(error=true) show error.message. Else give empty string*/}
        {error ? <p>{error.message}</p> : ''}
        <div>{data !== [] && data.title}</div>
    </div>
)}