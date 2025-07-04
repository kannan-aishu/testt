import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Nave";

export default function App() {
  return (
    <h1 className="">
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </h1>
  )
}