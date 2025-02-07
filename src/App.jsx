import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Latest from './components/Latest/Latest'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  const [menu, setMenu] = React.useState("home");
  return (
    <div id="top">
      <NavBar menu={menu} setMenu={setMenu} />
      <Home />
      <About />
      <Services />
      <Latest />
      <Contact />
      <Footer setMenu={setMenu} />
    </div>
  )
}

export default App