import React from "react";
import { connect } from "react-redux";

class Bye extends React.Component {
  render() {
    return <p>Adiós usuario {this.props.usuario}</p>;
  }
}

function injectedProps(state) {
  return {
    usuario: state.user1.nombre
  };
}

export default connect(injectedProps)(Bye);
