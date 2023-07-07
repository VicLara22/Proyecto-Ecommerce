import { Home } from './page/Home/Home';
import './app.css'
import { Route, Routes } from 'react-router-dom';
import { Products } from './page/Products/Products';

function App() {
  return (
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/products" element={<Products/>} />
</Routes>
  );
}

export default App;
