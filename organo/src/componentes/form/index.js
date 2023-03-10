import  './form.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../Lista Suspensa'
import Botao from '../botao'



const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
  
  ]


const Form = () => {

    return (

        <section className="formulario"> 
            

            <form>
            <h2>Preenhca os dados parar criar o card do colaborador</h2>
            <CampoTexto  label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto  label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto  label="Imagem" placeholder="Insira sua imagem"/>
            <ListaSuspensa label="Time" itens={times}/>
            <Botao>
                Cria Card
            </Botao>
            </form>

    
        
        </section>


    )

}

export default Form