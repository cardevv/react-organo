

import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/form';
import Time from './componentes/time';






function App() {

  const times = [

    {
      nome:'Programação' ,
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:        'Front-End' ,
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome:        'Data Science' ,
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome:        'Devops' ,
      corPrimaria: '#e06869',
      corSecundaria: '#fde7eb'
    },
    {
      nome:         'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:        'Mobile' ,
      corPrimaria: '#ff8ao5',
      corSecundaria: '#fff5d9'
    },
    {
      nome:        'Inovação e Gestão' ,
      corPrimaria: '#ffba29',
      corSecundaria: '#ffeedf'
    }

  ]

  const [colaboradores,setColaboradores] = useState([])

      const aoNovoColaborador = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])

      }
  return (


      

        
    <div className="App">
      
      <Banner />
      <Form aoCadastrar={colaborador => aoNovoColaborador(colaborador)} />

       {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}></Time>)}


      



      
      
       
      
    </div>
  );
}

export default App;
