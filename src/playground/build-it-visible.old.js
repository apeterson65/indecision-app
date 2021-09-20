const app = {
  title: "Visiblity Toggle",
};
let toggle = false;
const changeButton = () => {
  toggle = !toggle;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={changeButton}>
        {toggle ? "Hide details" : "Show details"}
      </button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById("app");
