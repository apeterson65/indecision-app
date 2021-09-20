class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecicion</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {" "}
          Options Component Here
          <li>Componenet 1</li>
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return <div>Add Options component here.</div>;
  }
}
// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// );
// ReactDOM.render(jsx, document.getElementById("app"));
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
