import Input from '../elements/Input'
import Nav from '../elements/Nav'
import Main from '../elements/Main'
import Footer from '../elements/Footer'
import globalStyles from '../../assets/modules/App.module.css'
import styles from '../../assets/modules/routeModules/Home.module.css'

const Home = () => {
  return (
    <div>
      <Input></Input>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
