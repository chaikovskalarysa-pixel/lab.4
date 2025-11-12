import React from 'react';
import TodoContainer from '../todo/TodoContainer';

export default function Home(){
  
  return (
    <div>
      <h1>Welcome to the Galactic Page!</h1>
      <p>Here you will find fascinating articles about planets, stars, galaxies and the latest discoveries in
            astronomy. We tell about the history of space exploration, modern NASA and SpaceX missions, the mysteries of
            black holes and the search for new worlds.</p>
      <div className="todo">
        <TodoContainer />
      </div>
    </div>
  );
}
