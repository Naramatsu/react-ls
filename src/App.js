import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  handShake() {
    return "hello bro";
  }

  lastname = "Montiel";
  counter2 = 0;

  addCounter2 = () => {
    this.counter2++;
    console.log("counter2: ", this.counter2);
  };

  addCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log("this.state.count", this.state.count);
  };

  render() {
    const name = "Dairo";
    const getFullName = () => `${name} ${this.lastname}`;
    let counter3 = 0;
    const addCounter3 = () => {
      counter3++;
      console.log("counter3", counter3);
    };

    return (
      <main>
        <h1>Hello From App Class Component</h1>
        <h4>{getFullName()}</h4>
        <p>{this.handShake()}</p>
        <hr />
        <h2>Counter section</h2>

        {/* no se van a mostrar cambios por mas que se actualice el valor */}
        <p>Counter2: {this.counter2}</p>
        <button onClick={() => this.addCounter2()}>Add Counter2</button>

        {/* no se van a mostrar cambios por mas que se actualice el valor */}
        <p>Counter3: {counter3}</p>
        <button onClick={() => addCounter3()}>Add Counter3</button>

        {/* siempre que se actualice el valor de una variable de estado el componente se vuelve a renderizar
            por ende, va a mostrar cada cambio */}
        <p>Counter State: {this.state.count}</p>
        <button onClick={() => this.addCounter()}>Add Counter State</button>
      </main>
    );
  }
}

export default App;
