import React from 'react';
import { Button } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';

import axios from 'axios';
const urlApi = 'http://localhost:4000/api/'

export const StringForm = () => {
  
  
  const [ formInputvalues, handleInputChange ] = useForm( {
    string: '',
   } );

  const { string } = formInputvalues;
  const handleSubmit = async ( e ) => {
  
  return await axios.get(urlApi + `iecho?text=${string}`)


  }

    return (
        
      <div class="p-md-5">
       
                  <form onSubmit = { handleSubmit }
                  on
                  >
                    <div class="p-md-5">
                        <input class="p-md-5"
                          className="input"
                          type="text" 
                          name = 'string'
                          placeholder="String"
                          value = { string }
                          onChange = { handleInputChange } 
                          />
                        <Button  class="p-md-5" type="submit">
                            Enviar</Button>
                     
                      </div>
          
                  </form>     
    </div>
    
    )

}