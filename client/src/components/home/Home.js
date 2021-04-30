import React, { useEffect, useState } from 'react';
import { NavBar } from '../navBar/NavBar';
import axios from 'axios';
const urlApi = 'http://localhost:4000/api/'
const url =  urlApi + "iecho/all";

export const Home = () => {
const [ strs, setString]  = useState( { str: [] });

  
  const getStrings = () => {

    
    axios.get(url, {
    headers: {
        'Content-type': 'application/json',
    }
    }).then((response) => {
        setString(response.data.data);
       
    });
};

useEffect(() => {
      
  getStrings();        

},[]);  


       return (
        <div class="p-md-5">
          <div class="p-12">
          <NavBar />
          </div>
            <div class="p-md-5">
          <table class="p-md-5">
            <thead>
              <tr class="p-md-5">
                <th>String</th>
                <th>Palindromo</th>
                </tr>
            </thead>
      
            
            <tbody>
            {   strs &&      strs.length>0 && strs.map((e)=>{
  return  ( <tr key={e.id} class="p-md-5">
          <td>{e.str}</td>
          <td>{(e.palindrome)? 'Es palindromo': 'No es palindromo'}</td>
          </tr>)
  }).reverse()} 
         

            </tbody>
          </table>
        </div> 
      </div>
    )
       }