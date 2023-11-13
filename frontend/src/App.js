
import './App.css';
import Footer  from './components/Footer/Footer';
import Header  from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';

import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom';
import MyNotes from './screens/LandingPage/My notes/MyNotes';


const App = () => (
  <BrowserRouter>
    
    <Header/>
     <main>

      <Route path="/" exact component={LandingPage}/>
      <Route path="/mynotes"  component={()=> <MyNotes/> } />

     </main>
    
      
    
    <Footer/>
  </BrowserRouter>
)

export default App;
