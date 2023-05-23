import Colaborador from '../Colaborador'
import './time.css'


const Time = (props , aoDeletar) => { 

    const css = {backgroundColor: props.corSecundaria}

    

    return (
        (props.colaboradores.length > 0) ? <section className='time'style={css} >
            <input type='color' className='input-cor'></input>
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            <div className='colaboradores'>{props.colaboradores.map
            
            ((colaborador) => 
            
                {
                    console.log(<Colaborador 
                        corDeFundo={props.corPrimaria}  
                        key={colaborador.nome
                        } 
                        nome={colaborador.nome} 
                        imagem={colaborador.imagem} 
                        cargo={colaborador.cargo}
                        aoDeletar={aoDeletar}
                         
                        >
            
            
                        </Colaborador>)
                    
                    return <Colaborador 
                    corDeFundo={props.corPrimaria}  
                    key={colaborador.nome
                    } 
                    nome={colaborador.nome} 
                    imagem={colaborador.imagem} 
                    cargo={colaborador.cargo}
                    aoDeletar={props.aoDeletar}
                     
                    >
        
        
                    </Colaborador>
                }            
            )}
            </div>
            
        </section> : ''

    )

}

export default Time