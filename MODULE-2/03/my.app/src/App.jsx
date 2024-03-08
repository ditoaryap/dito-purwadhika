import Home from "./pages/home"
import About from "./pages/about"
import { Routes, Route } from "react-router-dom"
import styled from "styled-components"
import { H1, H2 } from "./style"

const StyledH1 = styled.h1`
  color: blue;
  font-size: 32px;
`

function App() {
  return (
    <>
    <div>
      <H1>First Header</H1>
      <Routes>
        <Route 
        path="/" 
        element={<Home 
        name="dito" 
        email="dito@gmail.com" 
        StyledH1={StyledH1}/>}/>
        <Route 
        path="/about"
        element={
          <About />
        }
        />
      </Routes>
    </div>
    </>
  )
}

export default App
