import { Home } from './page/Home/Home';
import './app.css'
import { Route, Routes } from 'react-router-dom';
import { Products } from './page/Products/Products';
import { CardDetail } from './components/Card Detail/CardDetail';

function App() {
  return (
<Routes>
  <Route exact path="/" element={<Home/>} />
  <Route exact path="/products" element={<Products/>} />
  <Route exact path="/products/:id" element={<CardDetail/>} />
</Routes>
  );
}

export default App;
