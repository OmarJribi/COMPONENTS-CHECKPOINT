import React from 'react'
const numbers = ['1', '2', '3', '4'];
const listItems = numbers.map( el => <li key={el}> {el} </li> );
function App() {
    return (
        <div>
        <ul>{listItems}</ul>
        </div>
    );
  }
export default App;