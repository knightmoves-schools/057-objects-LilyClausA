let school = {
    'name': 'Avangeline',
    'average class size' : 14, 
    'mascot' : 'fire fly',
};
let Yada = "${school.name} has an average class size of ${school ['average class size']} and their mascot is a ${school ['mascot']}";

document.getElementById('result').innerHTML = Yada;

//should create an object named school that has three properties: 
// name, average class size, and mascot

//should assign the innerHTML of 
// the HTML element with the 
// id result to the  string 
// "${name} has an average class size 
// of ${average class size} and 
// their mascot is a ${mascot}"


