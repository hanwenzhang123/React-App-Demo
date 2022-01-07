import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryInfo: "",
      numberInput: "",
      areaCode: {
        China: "+86",
        USA: "+1",
        Japan: "+81"
      }
    };
  }

  changeNumber = (event) => {
    this.setState({ numberInput: event.target.value });
  };

  changeDropDown = (event) => {
    const input = event.target.value;
    let sliceNumberInput = this.state.numberInput;
    this.setState({ countryInfo: input });
    if (this.state.numberInput[0] === "+") {
      sliceNumberInput = sliceNumberInput.slice(3);
    }
    this.setState((prevState) => {
      return {
        numberInput: prevState.areaCode[input] + sliceNumberInput
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.countryInfo} {this.state.numberInput}
        </h1>
        <select onChange={this.changeDropDown}>
          <option>***Select a Country***</option>
          <option value="China">China</option>
          <option value="USA">USA</option>
          <option value="Japan">JAPAN</option>
        </select>
        <input
          type="text"
          placeholder="Enter a Number"
          value={this.state.numberInput}
          onChange={this.changeNumber}
        />
      </div>
    );
  }
}

export default App;
