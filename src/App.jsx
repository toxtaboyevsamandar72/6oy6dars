import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodoList from "./components/MyFormData";

function App() {
  return (
    <>
      <Navbar/>
      <TodoList/>
      <main className="grow">

      </main>
      <Footer/>
    </>
  );
}

export default App;
