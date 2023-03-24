import  './form.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../Lista Suspensa'
import Botao from '../botao'
import {useState} from 'react'






const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
      
      ]

      const [nome, setNome] = useState('')
      const [cargo, setCargo] = useState('')
      const [imagem, setImagem] = useState('')
      const [time, setTime] = useState('')

      const Salvaform = (evento) => {

        evento.preventDefault()

        
        console.log('Formulario foi enviado! =>', nome , cargo , imagem, time )


      }

    return (

        <section className="formulario"> 
            

            <form  onSubmit={Salvaform} >
            <h2>Preenhca os dados parar criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} 
            label="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}

            />
            



            <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu cargo"
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            
            />



            <CampoTexto
            
            
            label="Imagem" 
            placeholder="Insira sua imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />


            <ListaSuspensa 
            obrigatorio={true} 
            label="Time" 
            itens={times}
            valor={time}
            aoAlterado={valor => setTime(valor)}

            
            />


            <Botao>
                Cria Card
            </Botao>
            </form>

    
        
        </section>


    )

}

export default Form