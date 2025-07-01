import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <h1>🛒 SmartCart App</h1>
      <ProductList />
      <Cart />
      <footer style={{ marginBottom: '5px',marginTop: '50px', textAlign: 'center', fontSize: '14px', backgroundColor:"blue", color:"white" }}>
        © 2025 Developed by [Abid Panhwar ]
      </footer>
    </div>
  );
}

export default App;
