
var Phone = require("./../schemas/phone");
var config = require("./../config");

var secretKey = config.secretKey;

module.exports=function(app, express)
{
	//var api = express.Router();//



	app.post("/phone", function(req, res){
		var phone = new phone({
			phId : req.body.phId,
			image: req.body.image,
			brand: req.body.brand,
			phone: req.body.phone,
			totalQty: req.body.totalQty,
			price: req.body.price,
			height: req.body.height,
			width: req.body.width,
			depth: req.body.depth,
			weight: req.body.weight,
			memory: req.body.memory,
			os: req.body.os,
			processor: req.body.processor,
			rCamera: req.body.rCamera,
			fCamera: req.body.fCamera,
			resolution: req.body.resolution,
			screenSize: req.body.screenSize
		});


		phone.save(function(err){
			if(err)
			{
				res.send(err);
			}
			res.json({"message": "success"});
		})
	});

}