import "./App.css";
import Banner from "./Components/Banner";
import ContactForm from "./Components/ContactForm";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Gallery />
      <ContactForm/>
    </div>
  );
}

export default App;
