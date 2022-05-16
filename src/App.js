import {BrowserRouter} from 'react-router-dom';
import 'animate.css';
import {AnimatedRoutes} from './components/AnimatedRoutes';

function App() {
  return (
    <div className={` mobile-width`}>
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
