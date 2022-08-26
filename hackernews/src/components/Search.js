import React, {useState, useEffect} from "react";
import axios from 'axios';
import Searchbar from "./Searchbar";
import List from "./List";
import Loading from "./Loading";

export const Search = () => {

    
    // const URL = 'http://localhost:8000/data'
    const [searchWord, setSearchWord] = useState('');
    const [error, setError] = useState([])
    const [value, setValue] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(false);
    
    
    
    
    useEffect(() =>{
        
        const URL = `http://hn.algolia.com/api/v1/search?query=${searchWord}`
        
    if(searchWord){

        setIsLoading(true);
        
        axios(URL)
        
        .then((res) => {setData(res.data.hits);
        setIsLoading(false) })
        
        .catch((err) =>{
            setError(err);
            setIsLoading(false);
            })
        
    }
  },[searchWord])




    const handleChange = (e)=>{
    setValue(e.target.value)
    
    } 

    const handleClick = (e)=>{
    e.preventDefault();

    setSearchWord(value);
    console.log(searchWord)
    } 


return (
    <div className="App">
        <h1>Welcome to React searchbar</h1>
        <Searchbar handleClick={handleClick} handleChange={handleChange} value={value}/>
       
        {/*if(error=true) show error.message. Else give empty string*/}
        {error ? <p>{error.message}</p> : ''}
        {isLoading ? <Loading /> : <div>{ data && <List searchWord={searchWord} data={data}/> }</div>
        }
    </div>
)}