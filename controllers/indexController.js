const { request, response } = require("express");

const destination = class{
    static index = (req=request,res=response) =>{
            res.render('index')    
    }

    static dakar = (req=request,res=response) =>{
            res.render('destination')        
    }

    static somone = (req=request,res=response) =>{
        res.render('DestinationSomone')
    }

    static saly = (req=request,res=response) =>{
        res.render('DestinationSaly') 
    }

    static joal = (req=request,res=response) =>{
        res.render('DestinationJoal') 
    }  
    
    static sine = (req=request,res=response) =>{
        res.render('DestinationSine')  
    }

    static nianing = (req=request,res=response) =>{
        res.render('DestinationNianing')  
    }

    static contact = (req=request,res=response) =>{
        res.render('contact')  
    }
}


module.exports= destination