import Card from './card';
import data from './data';

function App() {

  return (
    <div>
      <nav className='nav'>
        <h1>New York Times Best Sellers</h1>
        <span>icon</span>
      </nav>
      <div className='container'>
      <div className='books'>
      {data.books.map(( book, index ) => (
      <Card key={index} index={index} {...book}/>
      ))}
        </div>
      </div>
    </div>
  );
}

export default App;
