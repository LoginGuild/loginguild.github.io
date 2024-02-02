import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="Desktop1" style={{width: 1440, height: 2231, position: 'relative', background: '#2C2C2C'}}>
    //   <div className="Apply" style={{width: 66, height: 105, left: 1180, top: 122, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Merge One', fontWeight: '400', wordWrap: 'break-word'}}>apply</div>
    //   <div className="Links" style={{width: 56, height: 105, left: 1099, top: 122, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Merge One', fontWeight: '400', wordWrap: 'break-word'}}>links</div>
    //   <div className="Roster" style={{width: 68, height: 105, left: 1006, top: 122, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Merge One', fontWeight: '400', wordWrap: 'break-word'}}>roster</div>
    //   <div className="AboutUs" style={{width: 97, height: 105, left: 884, top: 122, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'Merge One', fontWeight: '400', wordWrap: 'break-word'}}>about us</div>
    //   <div className="Login" style={{width: 187, height: 105, left: 194, top: 102, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'Merge One', fontWeight: '400', wordWrap: 'break-word'}}>LOGIN</div>
    //   <div className="Line1" style={{width: 1050, height: 0, left: 194, top: 154, position: 'absolute', border: '1px white solid'}}></div>
    // </div>
    <div className="App">
      {/* <div className='TopBar'>
        <article>
          <p class="flex items-center text-xl font-sans hover:font-serif">Test sdf</p>
        </article>
      </div> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold hover:underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
