const express = require('express');
const stringService = require('../services/stringService');
const Success = require('../handlers/successHandler');


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createString = async (req, res, next) => {
    let {text} = req.query
    try {
       
       text = await stringService.save(text);

        res.status(200).json(new Success(text));
    } catch (err) {
        next(err);
    }
};

const getAllStrings = async (req,res, next) =>{
    
    try {
       
      let  allStrings = await stringService.getAll();
 
         res.status(200).json(new Success(allStrings));
     } catch (err) {
         next(err);
     }




}
module.exports = {
    getAllStrings,
    createString
}