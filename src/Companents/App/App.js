import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App/App.css';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import SectionFive from '../sectionFive/section';
import SectionFour from '../sectionFour/section';
import SectionOne from '../sectionOne/section';
import SectionSix from '../sectionSix/section';
import SectionThree from '../sectionThree/section';
import SectionTwo from '../sectionTwo/section';

class App extends React.Component{
  render(){
    return <div className="App">
     <Header />
     <SectionOne />
     <SectionTwo />
     <SectionThree />
     <SectionFour />
     <SectionFive />
     <SectionSix />
     <Footer />
    </div>
  }
}
export default App
