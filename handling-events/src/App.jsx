import { CustomButton } from "./components/CustomButton";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Menu } from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div>
      <Menu />

      <Contact />
      <Newsletter />

      <CustomButton text="Like" />
      <CustomButton text="Subscribe" />
    </div>
  );
}

export default App;
