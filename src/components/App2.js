import { useState } from 'react';
import axios from 'axios';
const App = () => {

  const [open, setOpen] = useState(false);
  const [val, setVal] = useState('');
  const [results, setResults] = useState([]);
  const handleSearch = async () => {
    const data = await axios
      .get(`/api/wiki?search=${val}`);
    setResults(data.data.data);
  };
  let parsedRes = [];
  if (results.length) {
    parsedRes = results.map((result) => {
      return (
        <div style={{ cursor: 'pointer' }}
          onClick={() => window.open(`https://en.wikipedia.org/?curid=${result.pageid}`, '_blank', '')} style={{ border: '2px solid black' }}>
          {result.title}
        </div>);
    });
  }

  return (
    <div>
      <div>
        <button onClick={() => window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank', '')}>Go Random</button>
      </div>
      {
        !open &&
        <div onClick={() => setOpen(prev => !prev)}>
          Search
          </div>
      }
      {
        open &&
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input value={val} onChange={event => setVal(event.target.value)} />
          <button onClick={handleSearch}>Search</button>
          <div onClick={() => setOpen(prev => !prev)}>X</div>
        </div>
      }
      {
        parsedRes.length &&
        parsedRes
      }


    </div>
  );
};

export default App;