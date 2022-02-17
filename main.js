const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

// Define a function to convert the object to a string
const computerHTMLMaker = (compObject) => {
	// Make some HTML to represent the computer
	const compHTMLSection = `<section>${compObject.manufacturer} ${compObject.make} ${compObject.model} : with ${compObject.specs.memory}GB RAM, ${compObject.specs.hardDrive} of storage, ${compObject.specs.processor} GHz is available. </section>`

	// Return the HTML
	return compHTMLSection
}

console.log(computerHTMLMaker(computer))