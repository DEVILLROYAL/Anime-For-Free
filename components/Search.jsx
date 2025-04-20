
export default function Search(props) {

  return (
    <>
         <div id="search-border">
                <input id='search-input' type='text' value={props.value} onChange={props.onChange} placeholder='Search Here...'/>
                <button type='button' onClick={props.onClick}  id='search-button'>Search</button>
                </div>
    </>   
  )
}
