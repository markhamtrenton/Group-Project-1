const companyName = $('#companyNameEntry');
const employeeNumber = $('#employeeNumberEntry');
const companyEmail = $('#companyEmailEntry');
const companyPhone = $('#companyPhoneEntry');
const companyCity = $('#companyCityEntry');
const companyState = $('#companyStateEntry');
const companyProjectManager = $('#companyProjectManagerEntry');

const registerButton = $('#createCompany');

function saveCompanyValues(){
    let companyValues = {};
    companyValues.name = companyName.val();
    companyValues.employeeNumber = employeeNumber.val();
    companyValues.email = companyEmail.val();
    companyValues.phone = companyPhone.val();
    companyValues.city = companyCity.val();
    companyValues.state = companyState.val();
    companyValues.projectManager = companyProjectManager.val();
    localStorage.setItem('companyValues', JSON.stringify(companyValues));
};

registerButton.click(saveCompanyValues);

// Array of objects for project jobs 

const item = [
{ name: 'Roof Replacement', client: 'Honda', cost: '$120,000', description: 'Roof needs to get replaced, as it is worn and starting to leak into the main manufacturing area.', location: 'Dallas', time: '1 month', documentUrl: '', },
{ name: 'Flood Renovations', client: 'Jenn Cook', cost: '$35,000', description: 'Repairs to basement and garage areas for flooding.', location: 'Los Angeles', time: '2 weeks', documentUrl: '', },
{ name: 'Installing Stairs', client: 'John Deer', cost: '$10,000', description: 'I want to install a revolving stair case in the entrance room of the house.', location: 'Nashville', time: '3 weeks', documentUrl: '', },
{ name: 'Barn Storm Repair', client: 'Barney Hyde', cost: '$25,000', description: "Help! I was milking bessie during a catergory 4 hurricane and a lightning bolt startled the old heifer. She ran through the door and tore off the hinges belching like a locomotive. If you can a help a geezer like me, I'll give you some Dogecoin USD.", location: 'Birmingham', time: '1 month', documentUrl: 'https://www.youtube.com/watch?v=hRxOjvHFdo0', },
{ name: 'Urban Apartment complex', client: 'Hercules', cost: '$30,000', description: 'Installing new roofing shingles for apartment complex update.', location: 'Atlanta', time: '2 weeks', documentUrl: '', },
{ name: 'Metropolitan duplex', client: 'Tony Stark', cost: '$15,000', description: 'Roof repair for recent hale storm damage.', location: 'Miami', time: '3 Days', documentUrl: '', },
{ name: 'Back deck construction', client: 'Rob Smith', cost: '$8,000', description: 'Splurging on a new back deck with full gaming station, and princess leia robot.', location: 'Cumming', time: '1 day', documentUrl: '', },
{ name: 'Kitchen Renovation', client: 'Karen Candle', cost: '$10,000', description: 'Updating kitchen with modern ammenities. ', location: 'Duluth', time: '2 weeks', documentUrl: '', },
{ name: 'Window Replacement', client: 'Jim Bean', cost: '$3,000', description: 'Installing windows into a brand new house,looking for a small local exterior company.', location: 'Memphis', time: '2 weeks', documentUrl: '', },
]

// For-of function for selecting an object from array based on search criteria

for(let value of item){
item.filter(res => res.cost.condition > 0).map(ele=>ele.companyValues) 



}