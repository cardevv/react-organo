import { IColaborador } from '../../shared/Interfaces/IColaborador';
import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

interface TimeProps {
cor: string
nome: string
colaboradores: IColaborador[]



    
}



const Time = (time , aoDeletar, mudarCordoTime , colaborador , aoFavoritar  ) => { 

    const css = {backgroundColor: hexToRgba(time.cor,'0.6'), backgroundImage:'url(/imagens/fundo.png'}

    

    return (
        (time.colaboradores.length > 0) ? <section className='time'style={css} >
            <input   onChange={evento => time.mudarCordoTime(evento.target.value, time.nome)}    value={time.cor}   type='color' className='input-cor'></input>
            <h3 style={{borderColor: time.cor}}>
                {time.nome}
            </h3>
            <div className='colaboradores'>{time.colaboradores.map
            
            ((colaborador ) => 
            
                {
                    console.log(<Colaborador 
                        corDeFundo={time.cor}  
                        key={colaborador.nome
                        } 
                        nome={colaborador.nome} 
                        imagem={colaborador.imagem} 
                        cargo={colaborador.cargo}
                        aoDeletar={time.aoDeletar}
                        colaborador={colaborador}
                        aoFavoritar={aoFavoritar}
                        
                         
                        >
            
            
                        </Colaborador>)
                        console.log(colaborador)
                        
                       
                    
                    return <Colaborador 
                    colaborador={colaborador}
                    corDeFundo={time.cor}  
                    key={colaborador.nome
                    } 
                    nome={colaborador.nome} 
                    imagem={colaborador.imagem} 
                    cargo={colaborador.cargo}
                    aoDeletar={time.aoDeletar}
                    aoFavoritar={aoFavoritar}
                    
                    
                     
                    >
        
        
                    </Colaborador>
                }            
            )}
            </div>
            
        </section> : ''

    )

}

export default Time