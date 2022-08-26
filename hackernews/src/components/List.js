
const List =({data, searchWord}) =>{
   
   const filteredData = data.filter(data=>data.title?.toLowerCase().includes(searchWord.toLowerCase()));
    return(
        <div>
        
        {filteredData.length > 0 ? 
            filteredData.map(data => <div key={data.title}> {data.title}</div>) : console.log("No match")}
        </div>
    )
};
export default List;