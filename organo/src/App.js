

import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/form';
import Time from './componentes/time';
import Rodape from './componentes/rodape';
import { v4 as uuidv4 } from 'uuid';










function App() {

  const [times, setTimes] = useState([
    {
      
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const [colaboradores,setColaboradores] = useState([])

      const aoNovoColaborador = (colaborador) => {
        
        setColaboradores([...colaboradores, colaborador]) 
              
      }

      


      function deletarColaborador (id)  {
        
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))

        

      }

        function mudarCordoTime(cor , nome) {
            setTimes(times.map(time => {
              if (time.nome === nome) {
                time.cor = cor;
              }

              return time;

            }))

        }

        function cadastrarTime (novoTime) {

          setTimes([...times ,{...novoTime, id: uuidv4() }])

        }

        function aoFavoritar(id) {

          setColaboradores(colaboradores.map( colaborador=> {

            if(colaborador.id === id ) colaborador.favorito = !colaborador.favorito

            return colaborador


          }) )




        }



  return (


      

        
    <div className="App">
      
      <Banner />
      <Form  
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)}   
      aoCadastrar={colaborador => aoNovoColaborador(colaborador)} 

      />

       {times.map(time => <Time 

       aoFavoritar={aoFavoritar}
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
