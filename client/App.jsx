import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
    resorts = [],
    weather = [],
    equipment = [],
    }

  }

  render(){
    return(
      <div class="App">
        <h1>Success!</h1>
        <UserProfile/>
        <ResortsDisplay resortInfo={this.state.resorts} weatherInfo={this.state.weather} />
        <EquipmentDisplay equipmentInfo={this.state.equipment}/>
      </div>
    )
  }
}


export default App;