

import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/form';
import Time from './componentes/time';
import Rodape from './componentes/rodape';






function App() {

  const [times , setTimes] = useState ( [

    {
      nome:'Programação' ,
      cor:'#57c278',
      
    },
    {
      nome:        'Front-End' ,
      cor:'#82cffa',
      
    },
    {
      nome:        'Data Science' ,
      cor:'#a6d157',
      
    },
    {
      nome:        'Devops' ,
      cor:'#e06869',
      
    },
    {
      nome:         'Ux e Design',
      cor:'#DB6EBF',
      
    },
    {
      nome:        'Mobile' ,
      cor:'#ff8ao5',
      
    },
    {
      nome:        'Inovação e Gestão' ,
      cor:'#ffba29',
      
    }

  ]);

  const [colaboradores,setColaboradores] = useState([])

      const aoNovoColaborador = (colaborador) => {
        
        setColaboradores([...colaboradores, colaborador]) 
              
      }


      function deletarColaborador ()  {
        
        console.log('deletando colaborador')

      }

        function mudarCordoTime(cor , nome) {
            setTimes(times.map(time => {
              if (time.nome === nome) {
                time.cor = cor;
              }

              return time;

            }))

        }



  return (


      

        
    <div className="App">
      
      <Banner />
      <Form  times={times.map(time => time.nome)}  aoCadastrar={colaborador => aoNovoColaborador(colaborador)} />

       {times.map(time => <Time 
       mudarCordoTime={mudarCordoTime}
       key={time.nome} 
       nome={time.nome} 
       cor={time.cor}
       
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       aoDeletar={deletarColaborador}
       >
        


       </Time>)}

       <Rodape></Rodape>




      



      
      
       
      
    </div>
  );
}

export default App;
