import './Banner.css'
import React from 'react'


interface BannerProps {
        EnderecoImagem: string
        TextoAlt: string

}


 export const Banner = ({EnderecoImagem , TextoAlt} : BannerProps) => {

// /imagens/banner.png

        return (
                <header className='banner'>
                
                 <img src={EnderecoImagem} alt={TextoAlt}
                 /> 

        </header>
       
        )
}


        export default Banner;

