import logo from './logo.svg';
import './App.css';
import Mynavbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Boxdata from './components/boxdata';
import Charts from './components/chart';
import Chart from 'react-google-charts';
import Tabledata from './components/table';
import PP from './components/portfolio_people';
function App() {
  return (
    <div className="App">
      <Mynavbar />
      <div className="fullwdth">
          <div className="sidebar">
            <h5>Icon 1</h5>
            <h5>Icon 2</h5>
            <h5>Icon 3</h5>
            <h5>Icon 4</h5>
            <h5>Icon 5</h5>
            <h5>Icon 6</h5>
            <h5>Icon 7</h5>
            <h5>Icon 8</h5>
            <h5>Icon 9</h5>
            <h5>Icon 10</h5>
            <h5>Icon 11</h5>
            <h5>Icon 12</h5>
          </div>
         
          <div className='sidebar2'>
                <div className='main1'>
                  <div className='leftbutton'>
                      <button>Filter by</button>
                  </div>
                  <div className='rightbutton'>
                      <button>TQM</button>
                  </div>
               </div>
              
               <div className="main2">
                    <div className="halfwidth">
                    <Boxdata /> 
                    </div>
                    <div className="halfwidth">
                    <Charts /> 
                    </div>
              </div>
            <div className=''><PP /></div>
            <div className=''><Tabledata /></div>

         </div>
      </div>
    </div>
  );
}

export default App;
