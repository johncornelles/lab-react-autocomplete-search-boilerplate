import Search from './components/Search'
import data from  './resources/countryData.json'
function App() {
  return (
    <Search data={data}/>
  )
}

export default App