const defaultStatus = {
  nombre: "n/a"
};

export function prop2(prevState = defaultStatus, action) {
  //   console.log("REDUCER [prop2]", prevState);

  console.log("REDUCER [prop2]");

  switch (action.type) {
    case "ACTION_3":
      return {
        ...prevState,
        nombre: "Miguel"
      };
    default:
      return prevState;
  }
}
