import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import LogIn from './components/LogIn/LogIn';
import { AppBody, AppLoading, AppLoadingContents } from './style';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src={process.env.PUBLIC_URL + 'assets/slack-loading.gif'}
            alt='Loading'
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <Router>
      {!user ? (
        <LogIn />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Chat />}></Route>
            </Routes>
          </AppBody>
        </>
      )}
    </Router>
  );
}

export default App;
