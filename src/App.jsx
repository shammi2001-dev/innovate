import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer"
import { Intro } from "./components/Intro/Intro"
import { Navbar } from "./components/Navbar/Navbar"
import Process from "./components/Process/Process"
import Review from "./components/Review/Review"
import Service from "./components/Service/Service"
import Work from "./components/Work/Work"

function App() {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      <Service/>
      <Intro/>
      <Work/>
      <Process/>
      <Review/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
