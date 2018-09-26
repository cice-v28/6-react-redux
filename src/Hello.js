import React from "react";
import { connect } from "react-redux";
import { doType1, doType2, doType3 } from "./state/actions";

class Hello extends React.Component {
  change() {
    this.props.doType1();
  }

  change2() {
    this.props.doType2();
  }

  change3() {
    this.props.doType3();
  }

  render() {
    return (
      <div>
        <p>
          Hola {this.props.user1}, aún no sé nada de {this.props.user2}
        </p>
        <button onClick={() => this.change()}>Cambia</button>
        <button onClick={() => this.change2()}>Cambia 2</button>
        <button onClick={() => this.change3()}>Cambia 3</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user1: state.user1.nombre,
  user2: state.user2.nombre
});

const mapDispatchToProps = {
  doType1,
  doType2,
  doType3
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
