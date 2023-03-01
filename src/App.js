import './App.css';
import {PrimerComponente} from './components/PrimerComponente';
import {SegundoComponente} from './components/SegundoComponente';
import { Tercercomp } from './components/Tercercomp';
import { Tarjets } from './components/docsimg';


function App() {
  return (
    <div>
      <PrimerComponente/>
      <Tercercomp />
      <SegundoComponente />
    <div style={{
      position: 'absolute',

    }}>
      <Tarjets/>
    </div>
    </div>   
);

}

export default App;
