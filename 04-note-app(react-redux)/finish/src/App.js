import './App.css';
import { Provider } from 'react-redux';

import { store } from './redux/store/store';
import AddNotes from './components/AddNotes';
import NotesList from './components/NotesList';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AddNotes />
        <NotesList />
      </div>
    </Provider>
  );
}

export default App;
