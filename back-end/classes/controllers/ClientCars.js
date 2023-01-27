const {ClientCars} require {"./ClientCars"}
const 
const ajoutCar = async (req,res) => {
	try{
		let car = new ClientCars(req.body.make, req.body.model,req.body.year,req.body.registration,req.body.type);
	}
	catch(error) {

	}
}