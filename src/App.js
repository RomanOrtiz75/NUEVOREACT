import './App.css';
import {PrimerComponente} from './components/PrimerComponente';
import {SegundoComponente} from './components/SegundoComponente';
import { Tercercomp } from './components/Tercercomp';
import { Tarjets } from './components/docsimg';
import Buscador from './components/search';


function App() {
  return (
    <div>
      <PrimerComponente/>
      <Tercercomp />
      <SegundoComponente />
      <Buscador/>

    <div style={{
      position: 'absolute',

    }}>
      <Tarjets/>
    </div>
    
    <div style={{
      position: 'relative',

    }}>
    </div>
    </div>   
);

}

export default App;
