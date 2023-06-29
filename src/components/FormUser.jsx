import React, { Component } from "react";

class FormUser extends Component {
  state = {
    name: "",
    lastname: "",
    user: "",
    phone: "",
    email: "",
  };

  // handlerName = (event) => {
  //   // { target: value  }
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  // handlerLastname = (event) => {
  //   this.setState({
  //     lastname: event.target.value,
  //   });
  // };

  handlerInput = (event) => {
    const { value, name } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handlerSave = (event) => {
    const { name, lastname, user, phone, email } = this.state;
    alert(`
    name: ${name} \n
    lastname: ${lastname} \n
    user: ${user} \n
    phone: ${phone} \n
    email: ${email}
    `);
    event.preventDefault();
  };

  render() {
    const { lastname, user, phone, email } = this.state;

    return (
      <section>
        <h2>Form with form tag</h2>
        <form onSubmit={this.handlerSave}>
          <p>Name:</p>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            name="name"
            onChange={this.handlerInput}
          />
          <p>Lastname:</p>
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            value={lastname}
            onChange={this.handlerInput}
          />
          <p>User:</p>
          <input
            type="text"
            placeholder="user"
            name="user"
            value={user}
            onChange={this.handlerInput}
          />
          <p>Phone:</p>
          <input
            type="number"
            placeholder="phone"
            value={phone}
            name="phone"
            onChange={this.handlerInput}
          />
          <p>Email:</p>
          <input
            type="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={this.handlerInput}
          />
          <button>Save</button>
        </form>
      </section>
    );
  }
}

export default FormUser;
