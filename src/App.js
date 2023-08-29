import "./App.css";
import Navbar from "./components/elemenets-component/navbar";
import Footer from "./components/elemenets-component/footer";
import routes from "./router";
import { useRoutes } from "react-router-dom";

function App() {

  const router = useRoutes(routes)

  return (
    <main className="max-w-[100rem]  bg-slate-700 mx-auto">
      <Navbar></Navbar>
      {router}
      <Footer></Footer>
    </main>
  );
}

export default App;
