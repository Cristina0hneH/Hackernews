import './SearchBar.css';

const Searchbar = ({handleChange, handleClick, value}) =>{

    return (
        <form onSubmit={handleClick}>
            <div className="search">
            <input className="searchInput" type="text" onChange={handleChange} value={value} />
            <button className="searchButton">Search</button>
            </div>
        </form>
    )
}   
export default Searchbar;