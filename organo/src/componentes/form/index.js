import  './form.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../Lista Suspensa'
import Botao from '../botao'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'






const Form = (props , cadastrarTime , aoCadastrar) => {

    

      const [nome, setNome] = useState('')
      const [cargo, setCargo] = useState('')
      const [imagem, setImagem] = useState('')
      const [time, setTime] = useState('Programação')
      const [corTime, setCorTime] = useState('')
      const [nomeTime, setNomeTime] = useState('')
      const [id, setId] = useState(uuidv4());

      const Salvaform = (evento) => {

        evento.preventDefault()

        
        props.aoCadastrar({
            nome,
            cargo,
            imagem,
            time,
            id

        })  

        setId(uuidv4())
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
        

        




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
            itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}

            
            />


            <Botao>
                Criar Card
            </Botao>
            </form>




            <form  onSubmit={(evento , cadastrarTime) => 

               {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime ,cor: corTime});
                setCorTime('')
                setNomeTime('')

               
               }
               } >
            <h2>Preenhca os dados parar criar um novo time.</h2>
            <CampoTexto obrigatorio
            label="Nome"
            placeholder="Digite o nome do time"
            valor={nomeTime}
            aoAlterado={valor => setNomeTime(valor)}

            />
            



            <CampoTexto 
            obrigatorio
            label="Cor" 
            placeholder="Digite a cor do time"
            valor={corTime}
            aoAlterado={valor => setCorTime(valor)}
            
            />



           


           


            <Botao>
                Criar Time
            </Botao>
            </form>

    
        
        </section>


    )

}

export default Form