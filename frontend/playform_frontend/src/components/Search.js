import React, {useState} from 'react';

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };

function Search(props){

    const [query, setQuery]=useState("");
    const [results, setResults] = useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.djangoService.song_search(query).then((response)=> {
            setResults(response.data);
        });
    }

    return(
        <div style = {divStyle}>
            <h1>Search Song</h1>
            <form onSubmit={handleSubmit}>
                <label>Search Song:</label>
                <input 
                placeholder = "Search" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}></input>
                <button>Submit</button>
            </form>

            {results.map((item, index) => (
                <div key={index}>
                    <button onClick={() => props.djangoService.addToPlaylist(item, 'default')}>Add To Playlist</button>
                    <a href={`https://www.youtube.com/watch?v=${item.code}`}>{item.name}</a>
                    <br />
                    <br />
{/* change 'default' */}
                </div>
            ))}
        </div>
    )
}

export default Search