import '../../assets/App.css'

const Footer = () => {
  return (
    <footer
      className="text-center"
      style={{ margin: "0 auto", height: "6vh", backgroundColor: "#383E47", position: "fixed", left: 0, bottom: 0, marginTop: "5vh" }}
    >
      <div
        className="m-3"
        style={{color: "white"}}
      >&copy; Alton Michaux</div>
    </footer>
  )
}

export default Footer
