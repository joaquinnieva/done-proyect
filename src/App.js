import { Provider } from 'react-redux';
import AddTask from "./components/AddTask";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Main />
        <AddTask />
      </Provider>
    </>
  );
}

export default App;
