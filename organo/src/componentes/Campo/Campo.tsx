import './Campo.css'


interface CampoProps {

aoAlterado: (valor:string)  => void
placeholder: string
label: string
valor: string
obrigatorio: boolean
type: string




}




const Campo = ({aoAlterado, placeholder,label , valor , obrigatorio , type}: CampoProps ) => {

   

    


    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {

      aoAlterado(evento.target.value)
            
    }

    return (

        <div className={`campo campo-${type}`}>
            <label >
               {label}
            </label>
            <input  type={type}
             value={valor}    
             onChange={aoDigitar} 
             required={obrigatorio} 
             placeholder={placeholder} /> 
            

        </div>


    )
    

}

export default Campo