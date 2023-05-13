import './rodape.css'


const Rodape = () => {

    return (

        <footer className='footer'>

            <section>
                <ul>
                    <li>
                        <a href='facebook.com' alt=''>
                            <img src='/imagens/fb.png' alt=''></img>
                        </a>
                    </li>

                    <li>
                        <a href="instagram.com" target='_blank'>
                            <img src='/imagens/ig.png'  alt=''></img>
                        </a>
                    </li>

                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png' alt=''></img>
            </section>


            <section>
                <p>
                    Desenvolvido para Alura.
                </p>
            </section>


        </footer>


    )

}


export default Rodape