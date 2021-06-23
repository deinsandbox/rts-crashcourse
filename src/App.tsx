import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList/AddToList';
import List from './components/List/List'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?:string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([{
    name: "LeBron James",
    url: "https://cnnespanol.cnn.com/wp-content/uploads/2021/06/210610164624-lebron-james-nba-playoffs-lakers-los-angeles-23-postemporada-eeuu-deportes-cnne-vo-00000012-full-169.png",
    age: 36,
    note: "Allergic to stay on the same team"
  }])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople}></AddToList>
    </div>
  );
}

export default App;
