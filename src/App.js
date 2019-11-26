import React from 'react';
import './App.css';
import UserListContainer from "./features/userList/containers/userList.container";
import {SearchContainer} from "./features/search/containers/search.container";

function App() {
  return (
    <div className="App">
        <SearchContainer/>
      <UserListContainer/>
    </div>
  );
}

export default App;
