import { useState } from 'react';

const AutocompleteSearch = ({ data }) => {
  const [query, setQuery] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [isClicked, setClicked] = useState(false)
  const handleInputChange = (e) => {
    let newQuery = e.target.value;
    setQuery(newQuery);
    let newData = data.filter((item) => item.name.toLowerCase().includes(newQuery.toLowerCase()))
    setFilterData(newData);
    setClicked(false)
  };
  const handleClickSuggestion = (name) => {
  setQuery(name);
  setFilterData([])
  setClicked(true)
  };
  const handleEscape = (e) => {
  if(e.key == 'Escape') {
  setFilterData([])
  setClicked(true)
  }
}

return (
  <div className='search-box'>
    <input
      value={query}
      type='text'
      placeholder='Enter'
      onKeyDown={handleEscape}
      onChange={handleInputChange}
    />
    <button>search</button>
      <div className='suggestions'>
        {
          query.trim() === '' ? (
            <h2>Search something</h2>
          ) : filterData.length ? (
            <div>
              {filterData.map((item, index) => (
                <p onClick={() => handleClickSuggestion(item.name)} key={index}>{item.name}</p>
              ))}
            </div>
          ) : !isClicked && (
            "No results found"
          )
        }
      </div>
    </div>
  );
};

export default AutocompleteSearch;