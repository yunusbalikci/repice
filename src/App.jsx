import Categories from "./components/Categories"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { Routes, Route, Link } from "react-router-dom"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/category/:id" element={<Detail />} ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
