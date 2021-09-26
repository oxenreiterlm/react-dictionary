import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="App-header">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="search" />
        </main>
        <footer className="text-center">
          <a
            href="https://github.com/oxenreiterlm/react-dictionary"
            title="GitHub respository"
            target="blank"
            className="gitHubLink"
          >
            Open-source code
          </a>{" "}
          by Laura Oxenreiter
        </footer>
      </div>
    </div>
  );
}
