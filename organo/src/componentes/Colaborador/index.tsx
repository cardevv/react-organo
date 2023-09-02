import { IColaborador } from '../../shared/Interfaces/IColaborador';
import './colaborador.css'
import { AiFillCloseCircle , AiFillHeart , AiOutlineHeart} from 'react-icons/ai';

/*interface ColaboradorProps {
    id:string
    nome:string
    imagem:string
    cargo:string
    corDeFundo:string
    aoFavoritar: (valor:string)  => void
    aoDeletar : (valor:string)  => void
    colaborador: IColaborador[]



}

*/

const Colaborador = ({nome, imagem, cargo ,  aoDeletar , corDeFundo , id , colaborador , aoFavoritar} )   => {        
 
    
   

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
                        <div className='favoritar'>
                            {colaborador.favorito 
                            ? 
                              <AiFillHeart size={25}  color='#ff0000' onClick={  ()=> aoFavoritar(colaborador.id)} /> 
                            : <AiOutlineHeart size={25}  onClick={()=> aoFavoritar(colaborador.id)} />}
                        </div>
                    </div>
            </div>


        )

}


export default Colaborador