import './colaborador.css'



const Colaborador = ({nome, imagem, cargo , corDeFundo, aoDeletar}) => {

    

        return(

            <div className='colaborador'>
                
                <div className='cabecalho' style={{background: corDeFundo}}>
                <div className='deletar' onClick={aoDeletar}>deletar</div>
                    <img src={imagem} alt={nome}></img>
                    
                </div>
                <div className='rodape'>
                        <h4>{nome}</h4>
                        <h5>{cargo}</h5>
                    </div>
            </div>


        )

}


export default Colaborador