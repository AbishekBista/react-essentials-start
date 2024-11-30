import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts.jsx";
import { Examples } from "./components/Examples.jsx";
import { InputComponent } from "./components/InputComponent.jsx";
import { Button } from "./components/Button.jsx";
import { BiHome } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";

export const userData = ["Abishek Bista", "Akash Bista"];

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
