

import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/form';




function App() {

  const [colaboradores,setColaboradores] = useState([])

      const aoNovoColaborador = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])

      }
  return (


      

        
    <div className="App">
      
      <Banner />
      <Form aoCadastrar={colaborador => aoNovoColaborador(colaborador)} />
      


      



      
      
       
      
    </div>
  );
}

export default App;
