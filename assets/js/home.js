/*$(".clickable-row").click(function() {
    window.location = $(this).data("href");
});
*/
const projectsList = [
    { id:"1", name: 'Roof Replacement', client: 'Honda', cost: '$120,000', description: 'Roof needs to get replaced, as it is worn and starting to leak into the main manufacturing area.', location: 'Dallas', time: '1 month', documentUrl: '' },
    { id:"2", name: 'Flood Renovations', client: 'Jenn Cook', cost: '$35,000', description: 'Repairs to basement and garage areas for flooding.', location: 'Los Angeles', time: '2 weeks', documentUrl: '' },
    { id:"3", name: 'Installing Stairs', client: 'John Deer', cost: '$10,000', description: 'I want to install a revolving stair case in the entrance room of the house.', location: 'Nashville', time: '3 weeks', documentUrl: '' },
    { id:"4", name: 'Barn Storm Repair', client: 'Barney Hyde', cost: '$25,000', description: "Help! I was milking bessie during a catergory 4 hurricane and a lightning bolt startled the old heifer. She ran through the door and tore off the hinges belching like a locomotive. If you can a help a geezer like me, I'll give you some Dogecoin USD.", location: 'Birmingham', time: '1 month', documentUrl: 'https://www.youtube.com/watch?v=hRxOjvHFdo0' },
    { id:"5", name: 'Urban Apartment complex', client: 'Hercules', cost: '$30,000', description: 'Installing new roofing shingles for apartment complex update.', location: 'Atlanta', time: '2 weeks', documentUrl: '' },
    { id:"6", name: 'Metropolitan duplex', client: 'Tony Stark', cost: '$15,000', description: 'Roof repair for recent hale storm damage.', location: 'Miami', time: '3 Days', documentUrl: '' },
    { id:"7", name: 'Back Deck Construction', client: 'Rob Smith', cost: '$8,000', description: 'Splurging on a new back deck with full gaming station, and robot.', location: 'Cumming', time: '1 Day', documentUrl: '' },
    { id:"8", name: 'Kitchen Renovation', client: 'Karen Candle', cost: '$10,000', description: 'Updating kitchen with modern ammenities. ', location: 'Duluth', time: '2 weeks', documentUrl: '' },
    { id:"9", name: 'Window Installation', client: 'Jim Bean', cost: '$3,000', description: 'Installing windows into a brand new house,looking for a small local exterior company.', location: 'Memphis', time: '3 weeks', documentUrl: '' },
    { id:"10", name: 'Renovating Pool', client: 'Tuscany', cost: '$50,000', description: 'Renovating Apartment complex pool for the summer. Want to make it more modern and appealing for our current and future residents.', location: 'Charlotte', time: '3 Months', documentUrl: '' },
    { id:"11", name: 'Apartment Complex', client: 'Ralph McGill', cost: '$5.2 million', description: 'Building new luxury style apartment complex in the heart of Atlanta.', location: 'Atlanta', time: '2 years', documentUrl: '' },
    { id:"12", name: 'Paving Parking', client: 'Dogecoin', cost: '$25,000', description: 'Concrete is cracking and has multiple potholes. Looking to fix these multiple issues in the next month, before the season gets busy.', location: 'San Diego', time: '1.5 weeks', documentUrl: '' },
    { id:"13", name: 'Capital Repairs', client: 'Texas Government', cost: '$120,000', description: 'After the multiple tornados and devasting weather that came through Austin this past two weeks. Multiple government buildings were damaged in the events. Looking to fix multiple windows and sections of the buildings had trees that fell on them. Help needed ASAP!', location: 'Austin', time: '2 months', documentUrl: '' },
    { id:"14", name: 'Installing Metal Fencing', client: 'Blue Cheese Ranch', cost: '$15,000', description: 'Installing fencing around newly purchased 2 acre pastore.', location: 'Omaha', time: '3 Months', documentUrl: '' },
    ]



const table = $('#projectsTableBody');

function createAllProjects()
{
    //loop through project list
    for (const project of projectsList) {
        createProject(project);
    }   
}

function createProject(projectObj)
{
    var projectRecord = $('<tr></tr>');
    projectRecord.append(`<td>${projectObj.name}</td>`);
    projectRecord.append(`<td>${projectObj.client}</td>`);
    projectRecord.append(`<td>${projectObj.cost}</td>`);
    projectRecord.append(`<td>${projectObj.location}</td>`);
    projectRecord.append(`<td>${projectObj.time}</td>`);
    projectRecord.append(`<td><button type="button" id="${projectObj.id}" class="btn btn-primary viewProjectButton">View Details</button></td>`);
    table.append(projectRecord);
}

createAllProjects();

function viewProject(id){
    localStorage.setItem("projectToLoad", id);
    window.location.href = "./project.html";
};

$(".viewProjectButton").click(function(){
    const id = $(this).attr("id");
    viewProject(id);
});