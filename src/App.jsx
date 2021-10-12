import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './Activity.jsx';

import Header from './Header.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Activity/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
