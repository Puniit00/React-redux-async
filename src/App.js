import './App.css';
import UserContainer from './component/userContainer';
import {Provider} from 'react-redux';//rpovides the redux store to the react application
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <UserContainer/>
    </Provider>
  );
}

export default App;
