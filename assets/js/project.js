//url is a string pointing to our API.
//data is an object in JSON notation, NOT a string. 
async function submitBid(){
    //setup post data arguments
    const submitURL = 'http://oddjobs.ga/projects/create'
    let bidObject = {};
    //grab values from fields
    let startDateInput = $('#startDateInput');
    let dedicatedEmployeesInput = $('#dedicatedEmployeesInput'); 
    let projectManagerInput = $('#projectManagerInput'); 
    let bidAmountInput = $('#bidAmountInput');
    //get company information
    var companyObj = JSON.parse(localStorage.getItem('companyValues'));
    //get project id
    const projectID = localStorage.getItem('projectToLoad');
    //set values to bid object
    bidObject.estimatedStartDate = startDateInput.val();
    bidObject.dedicatedEmployees = dedicatedEmployeesInput.val();
    bidObject.projectManager = projectManagerInput.val();
    bidObject.bidAmount = bidAmountInput.val();
    bidObject.company = companyObj.name;
    bidObject.projectID = projectID;
    //send to API
    await postData(submitURL, bidObject);
};

$('#submitBidButton').click(submitBid);

/*
{
  "foundBids": true,
  "bids": [
    {
      "projectID": "1",
      "bidAmount": "1200",
      "company": "Lane Construction",
      "dedicatedEmployees": "20",
      "estimatedStartDate": "12-12-12",
      "projectManager": "Trenton LOL"
    },
    {
      "projectID": "1",
      "bidAmount": "1200",
      "company": "Lane Construction",
      "dedicatedEmployees": "20",
      "estimatedStartDate": "12-12-12",
      "projectManager": "Trenton LOL"
    },
    {
      "projectID": "3",
      "bidAmount": "4000",
      "company": "DN Home, LLC",
      "dedicatedEmployees": "5",
      "estimatedStartDate": "12-12-12",
      "projectManager": "Oscar"
    },
    {
      "projectID": "1",
      "bidAmount": "1200",
      "company": "Lane Construction",
      "dedicatedEmployees": "20",
      "estimatedStartDate": "12-12-12",
      "projectManager": "Trenton LOL"
    }
  ]
}

*/

function returnProjectObjectByID(projectID)
{
    for (const project of projectsList){
        if (project.id === projectID){
            return project;
        } else{
            console.log(project.id);
        }
    };
}


async function appendProjectData(projectID){
    let projectObj = returnProjectObjectByID(projectID);
    //const projectName = $('#projectName');
    //const projectInformation = $('#projectInformation');
    $('#projectName').text(`${projectObj.name}`);
    $('#projectInformation').append(`<li>Requesting Client: ${projectObj.client}</li>`);
    $('#projectInformation').append(`<li>Estimated Project Cost: ${projectObj.cost}</li>`);
    $('#projectInformation').append(`<li>Project Location: ${projectObj.location}</li>`);
    $('#projectInformation').append(`<li>Estimated Time to Complete: ${projectObj.time}</li>`);
    $('#projectInformation').append(`<li>Description of Project: <p> ${projectObj.description}</p></li>`);
    const viewAllURL = 'http://oddjobs.ga/projects/viewall';
    const viewAllData = await postData(viewAllURL);
    for (bids of viewAllData.bids){
        if (bids.projectID === projectID){
            const table = $('#bidsTableBody')
            let currentBidTable = $('<tr></tr>');
            currentBidTable.append(`<td>${bids.company}</td>`);
            currentBidTable.append(`<td>${bids.projectManager}</td>`); 
            currentBidTable.append(`<td>${bids.estimatedStartDate}</td>`);
            table.append(currentBidTable);
        }
    };
};

function loadPage(){
    const projectID = localStorage.getItem('projectToLoad');
    appendProjectData(projectID);
};

loadPage();
checkValidCompany();

