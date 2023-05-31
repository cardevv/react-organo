import './colaborador.css'
import { AiFillCloseCircle} from 'react-icons/ai';





const Colaborador = ({nome, imagem, cargo ,  aoDeletar , corDeFundo , id , colaborador}) => {        
 
    
    

        return(

            <div className='colaborador'>
                
                <div className='cabecalho' style={{backgroundColor: corDeFundo}} >
                <div    className='deletar' onClick={() => aoDeletar(colaborador.id)}
                
                >  
                    <AiFillCloseCircle size={20} ></AiFillCloseCircle></div>
                    <img src={imagem} 
                    alt={nome}></img>
                    
                </div>
                <div className='rodape'>
                        <h4>{nome}</h4>
                        <h5>{cargo}</h5>
                    </div>
            </div>


        )

}


export default Colaborador