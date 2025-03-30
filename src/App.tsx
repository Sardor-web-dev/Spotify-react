import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import Header from "./components/custom/Header"
import Player from "./components/custom/Player"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/auth" element={<Auth/>} />
      <Route />
      <Route />
    </Routes>
    <Header/>
    <Player />
    </>
  )
}

export default App
