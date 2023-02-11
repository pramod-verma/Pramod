import css from './styles/app.module.scss'
import Header from './components/header/Header';
import Hero from './components/home/Hero';
import Experties from './components/experties/Experties';
import Works from './components/works/Works';
import Portfolio from './components/portfolio/Portfolio';
import People from './components/people/People';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <div className={`innerWidth bg-primary ${css.container}`}>
        <Hero />
        <Experties/>
        <Works/>
        <Portfolio/>
        <People/>
        <Footer/>
      </div>
    </>


  );
}

export default App;
