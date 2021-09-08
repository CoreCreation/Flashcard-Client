import logo from './logo.svg';
import './App.css';
import FlashcardList from './components/FlashcardList';
import FlashcardForm from './components/FlashcardForm';

function App() {
  return (
    <div>
      <header>
        Flashcards:
      </header>
      <div>
        <FlashcardList />
      </div>
      <div>
        <FlashcardForm />
      </div>
    </div>
  );
}

export default App;
