import './App.css';
import FlashcardList from './components/FlashcardList';
import FlashcardForm from './components/FlashcardForm';
import { Button } from '@material-ui/core';

function App() {

  async function deleteOne() {
    fetch("http://localhost:8080/api/v1/flashcard/1", {
      method: "DELETE"
    }).then((res) => alert(res)).catch((error) => alert(error));
  }


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
      <div>
        <Button onClick={deleteOne} color="primary" variant="contained">Delete #1</Button>
      </div>
    </div>
  );
}

export default App;
