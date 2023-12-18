import './App.css';
import Row from './components/Row';

import categories from './Api';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">

      <Nav/>
      <Banner /> 
      {categories.map((category) => {
        return  <Row 
          key={category.name} 
          title={category.title} 
          path={category.path}
          isLarge={category.isLarge}>
          </Row>
      })}

    </div>
  );
}

export default App;
