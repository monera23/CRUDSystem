var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var playerSchema= new Schema({
	name: {
		type: String,
		required: true,
		unique:true

	}
});

var players=mongoose.model('player',playerSchema);
module.exports=players;