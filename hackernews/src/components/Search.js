import HACKERNEWS from '../data/hackernews.json';
import {useState} from 'react';

export default function Search(){
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {  
        setSearchTerm(e.target.value);
    }

    return (
        <form>
            <h1>Welcome to our search bar</h1>
            <label>Want some news?</label>
            <input type="text" placeholder="Search" onChange={handleChange}/>
            {HACKERNEWS.data.hits.filter((val) => {
                if (searchTerm == '') {
                    return ''
                } else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return <div key={key}>{val.title}</div>
            })}
        </form>
    )
}