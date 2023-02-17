import './App.css';
import {PrimerComponente} from './components/PrimerComponente';
import {SegundoComponente} from './components/SegundoComponente';
import { Tercercomp } from './components/Tercercomp';
import {Tarjets} from './components/docsimg';


function App() {
  return (
      <div>
     <PrimerComponente/>
     <div>
     <Tercercomp/>
     </div>
      <div>
      <SegundoComponente/>
      </div>
     <div>
     <Tarjets/>
     </div>
      </div>    
);

}

export default App;
