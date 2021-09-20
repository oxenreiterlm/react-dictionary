import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Open-source code by Laura Oxenreiter
        </footer>
      </div>
    </div>
  );
}
