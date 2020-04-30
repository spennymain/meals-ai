import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecipeCard from './RecipeCard'
import BottomNavigator from './BottomNavigator'
import './App.sass';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
      <div className="App-content">
        <div className="recipes">
          <RecipeCard />
        </div>
        <div className="icons">
          <Fab color="secondary" aria-label="edit">
              <CloseIcon />
          </Fab> 
            <Fab color="primary" aria-label="add">
                <FavoriteIcon />
            </Fab>
        </div>   
        <div className="navigator"><BottomNavigator /></div>
      </div>
    </div>
  );
}

export default App;
