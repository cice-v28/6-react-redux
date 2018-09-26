const defaultState = {
  nombre: "n/a"
};

export function prop1(prevState = defaultState, action) {
  //   console.log("REDUCER [prop1]", prevState);

  switch (action.type) {
    case "ACTION_1":
      return {
        ...prevState,
        nombre: "Pepe"
      };
    case "ACTION_2":
      return {
        ...prevState,
        nombre: "Juan"
      };
    default:
      return prevState;
  }
}
