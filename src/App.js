import Main from "./Main";

const MyContentComponent = (
  <Main title={"Hello World!"}>
    <h1 style={{ color: "red" }}>I'm your child!</h1>
  </Main>
);

const contentJson = {
  type: "main",
  $$typeof: Symbol.for("react.element"),
  key: null,
  ref: null,
  props: {
    title: "Hello World!",
    children: {
      type: "h1",
      $$typeof: Symbol.for("react.element"),
      key: null,
      ref: null,
      props: {
        children: "I'm your child!",
        style: { color: "green" },
      },
    },
  },
};

function App() {
  return (
    <div className="App">
      {MyContentComponent}
      {contentJson}
    </div>
  );
}

export default App;
