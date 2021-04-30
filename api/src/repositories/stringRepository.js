const db = require("../models");
const Str = db.strings

class StrRepository {

    constructor(){

    }

    getAll =  async () =>{
        return await Str.findAll();
    }

    async save(str) {
        let obj={}
        let reversedString = [...str].reverse().join('')
        
        if(str==reversedString){
            obj = {str: reversedString, palindrome:true}
        }
        else
        {
            obj = {str: reversedString, palindrome:false}
            
        }
        console.log(obj, "obj")
     
        await Str.create(obj); 
        return await this.getAll()
    }

}

module.exports = StrRepository;