
const List =({data, searchWord}) =>{
    const filteredData = data.filter(data=>data.title.toLowerCase().includes(searchWord.toLowerCase()))
    return 
}
export default List;