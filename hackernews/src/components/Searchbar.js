

const Searchbar = ({handleChange, handleClick, value}) =>{

    return (
        <form >
            <input type="text" onChange={handleChange} value={value} />
            <button onClick={handleClick}>Search</button>
        </form>
    )
}   
export default Searchbar;