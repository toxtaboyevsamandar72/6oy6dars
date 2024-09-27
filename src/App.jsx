import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MyFormData from "./components/MyFormData";

function App() {
  return (
    <div className="base-container bg-zinc-50">
      <Navbar/>
      <MyFormData/>
      <main className="grow">

      </main>
      <Footer/>
    </div>
  );
}

export default App;
