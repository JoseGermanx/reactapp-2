import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"




function Home({children}) {
  return (
    <>
    <NavBar />
    <div>
      {children}
    </div>
    <Footer />

    </>
  )
}

export default Home