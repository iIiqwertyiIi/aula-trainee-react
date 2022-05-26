import Header from './components/Header/index.js'
import './global.css'
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes/index.js';
import { UserProvider } from './context/useUserContext.js'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header/>
        <MyRoutes/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
