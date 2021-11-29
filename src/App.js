import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </AppBody>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
