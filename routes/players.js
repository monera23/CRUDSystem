var express = require('express');
var bodyParser = require('body-parser');

var mongoose=require('mongoose');

var players= require('../models/player-model');

var playerrouter=express.Router();

playerrouter.use(bodyParser.json());

playerrouter.route('/')
.get(function(req,res,next){
	players.find({},function(err,player){
		if(err) throw err;

		res.json(player);

	});

})
.post(function(req,res,next){
	players.create(req.body,function(err,player){
		if(err) throw err;

		console.log('Player created.');

		var id=player._id;

		res.writeHead(200,{
			'Content-type':  'text/plain'
		});

		res.end('Added player with id:' + id);

	});
});

playerrouter.route('/:id')
.get(function(req,res,next){
	players.findById(req.params.id,function(err,player){
		if(err) throw err;

		res.json(player);

	});
})
.put(function(req,res,next){
	players.findByIdAndUpdate(req.params.id,{
		$set: req.body
   
	},{
		new: true
	},function(err,player){
		if(err) throw err;

		res.json(player);

	});
})
.delete(function(req,res,next){
	players.findByIdAndRemove(req.params.id,function(err,player){
		if(err) throw err;

		res.json(player);
	});
});

module.exports = playerrouter;