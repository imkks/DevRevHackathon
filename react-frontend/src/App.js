import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Chart from './components/Chart';
import { Review } from './components/Review';
import Reviews from './components/Reviews';
import { Dashboard } from './components/Dashboard';
import { bool } from 'prop-types';

function App() {
  return (
    <div className='row bg-dark text-body-secondary' data-bs-theme="dark">
      <div className='me-2 col-2 '>
      <Navbar></Navbar>
      </div>
      <div className='col-9'>
          <Dashboard/>
      </div>
    </div>
  );
}

export default App;
