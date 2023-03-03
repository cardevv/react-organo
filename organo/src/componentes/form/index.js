import  './form.css'
import CampoTexto from '../CampoTexto/CampoTexto'



const Form = () => {

    return (

        <section className="formulario"> 
            

            <form>
            <h2>Preenhca os dados parar criar o card do colaborador</h2>
            <CampoTexto  label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto  label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto  label="Imagem" placeholder="Insira sua imagem"/>
            </form>

    
        
        </section>


    )

}

export default Form