import  './form.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../Lista Suspensa'
import Botao from '../botao'






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

      const Salvaform = (evento) => {

        evento.preventDefault()

        
        console.log('Formulario foi enviado!')


      }

    return (

        <section className="formulario"> 
            

            <form  onSubmit={Salvaform} >
            <h2>Preenhca os dados parar criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto  label="Imagem" placeholder="Insira sua imagem"/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
            <Botao>
                Cria Card
            </Botao>
            </form>

    
        
        </section>


    )

}

export default Form