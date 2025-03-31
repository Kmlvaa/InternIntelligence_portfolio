import Cursor from './_components/Cursor';
import { ScrollToTop } from './_components/ScrollToTop';
import './App.css';
import Pages from './Pages';

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Cursor />
      <Pages />
      <ScrollToTop />
    </div>
  );
}

export default App;
