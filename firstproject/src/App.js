import React, {Component} from "react";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/third";
import Forth from "./Components/Forth";
class App extends Component {
  render(){
    return (
      <div className="App">
        <First />
        <Second />
        <Third />
        <Forth />
      </div>
    )
  }
}

export default App;
