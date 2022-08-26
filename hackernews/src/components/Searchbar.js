

const Searchbar = ({handleChange, handleClick, value}) =>{

    return (
        <form onSubmit={handleClick}>
            <input type="text" onChange={handleChange} value={value} />
            <button >Search</button>
        </form>
    )
}   
export default Searchbar;