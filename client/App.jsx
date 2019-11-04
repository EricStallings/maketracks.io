import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="App">
        <UserProfile/>
        <ResortsDisplay/>
        <EquipmentDisplay/>
      </div>
    )
  }
}

export default App;