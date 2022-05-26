import Header from './components/Header/index.js'
import './global.css'
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/index.js';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
