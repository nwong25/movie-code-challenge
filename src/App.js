import React, {Component} from 'react';
import NavBar from "./components/NavBar/NavBar";
import generateMenuItems from "./helpers/generateMenuItems";
import MovieList from "./components/MovieList/MovieList";
import menuIcon from './images/menu-24px.svg'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayNavMenu: false
    }
  }

  _showNavMenu = (state) => {
    this.setState({
      displayNavMenu: !state
    })
  }

  render() {
    const {displayNavMenu} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <a className="hidden" href="#main-content">Skip to content</a>
          <button className='hamburger-icon' onClick={() => this._showNavMenu(displayNavMenu)} aria-label={displayNavMenu ? 'Open navigation menu' : 'Close navigation menu'}>
            {
              displayNavMenu ?
                <span aria-hidden="true">&times;</span>
                :
                (<img src={menuIcon} alt='Menu Icon'/>)
            }
          </button>
          <h1 className='header-text'>Movie Search</h1>
        </header>
        <div>
          <NavBar
            menuItems={generateMenuItems({numberOfItems: 7})}
            displayNavMenu={displayNavMenu}
          >
          </NavBar>
          <main id='main-content'>
            <MovieList/>
          </main>
        </div>
      </div>
    );
  }
}



export default App;
