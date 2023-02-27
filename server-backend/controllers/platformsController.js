// Import database
const { request } = require('express')
const knex = require('../db')
const jwt = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");
const env = require("../env.json")
const privateKey = env.server.PrivateKey;
//
//add verify ALL  request actions  -------------------------------
//test connectivity actions
const jwtVerify = (req,x) => {
    let today = new Date(Date.now());
    let jwtReq =req.headers["authorisation"];
    let verified = false;
    console.log(jwtReq)
    
    jwt.verify(jwtReq, privateKey, function(err,decoded){
              if(!err){verified =true; 
                    console.log(decoded,'verfication check passed, at endpoint:',x,',at time:',today.toDateString())}
              else{ console.log(err)}
                  }
                   )
    
    return verified;
  }
//
  exports.test = async (req,res) => {
    res.json({status:"Ok"})
    }
  exports.wedgeAll = async (req,res) => {
    knex
    .select('*')
    .from('public.wedge')
    .then(userData => {
      // Send platforms extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving platforms: ${err}` })
    })
    
    }
  //
  exports.wedgeHead = async (req,res) => {
    knex('wedge')
    .withSchema('public')
    .columnInfo()
    .then(userData => {
      // Send platforms extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving platforms: ${err}` })
    })
    
    }