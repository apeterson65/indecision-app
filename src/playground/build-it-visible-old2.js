class VisiblityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. There are some details you can see now!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById("app"));

// const app = {
//   title: "Visiblity Toggle",
// };
// let toggle = false;
// const changeButton = () => {
//   toggle = !toggle;
//   render();
// };

// const render = () => {
//   const template = (
// <div>
//   <h1>{app.title}</h1>
//   <button onClick={changeButton}>
//     {toggle ? "Hide details" : "Show details"}
//   </button>
//   {toggle && (
//     <div>
//       <p>Hey. There are some details you can see now!</p>
//     </div>
//   )}
// </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// const appRoot = document.getElementById("app");
// render();
