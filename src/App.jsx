import Button from './components/Button';
import './sass/main.scss';

function App() {
  return (
    <div className='container'>
      <h1>Kanban Task Management App</h1>
      <div className='flex'>
        <Button btnClass={'btn btn-primary btn-lg'}>Button Primary (L)</Button>
        <Button btnClass='btn btn-primary'>Button Primary (S)</Button>
        <Button btnClass='btn btn-secondary'>Button Secondary (S)</Button>
        <Button btnClass='btn btn-destructive'>Button Destructive</Button>
      </div>
    </div>
  );
}

export default App;
