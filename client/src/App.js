import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import PieChartCircle from './components/PieChartCircle';
import PostsCard from './components/PostsCard';
import { useState } from 'react';

function App() {

  const [parentSearchResults, setParentSearchResults] = useState(null);

  const handleSearchResults = (results) => {
    setParentSearchResults(results);
  };

  return (
    <div className="d-flex flex-column h-100">
    <Navbar/>
    <section className='d-flex flex-column appBody flex-grow-1'>

      <div className="mt-5 d-flex justify-content-center">
        <Card>
          <SearchBar url="http://localhost:8000/college-data" parameter_name="college_name" onSearchResults={handleSearchResults} />
        </Card> 
      </div>

      <div className="w-100 p-4 flex-grow-1">
        <Card className="w-100 h-100 text-center">


        {parentSearchResults ? (

          <div className="d-flex w-100 h-100 justify-contents-center align-items-center">
            <div className="flex-grow-1">
              <PostsCard title="Latest Posts About The College" infos={parentSearchResults.infos} />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Card className="m-5">
                <PieChartCircle radius={100} percent={parentSearchResults.ratings} />
              </Card>
            </div>
          </div>
        ) : (
          <h1>(Type the name of a College)</h1>
        )}

        </Card>
      </div>

    </section>
    </div>
  );
}

export default App;