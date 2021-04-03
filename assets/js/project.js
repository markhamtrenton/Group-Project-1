//url is a string pointing to our API.
//data is an object in JSON notation, NOT a string. 
const bidAmountPrice = $('#bidAmountInput');
const bidNumberEmployees = $('#dedicatedEmployeesInput');
const bidStartDate =  $('#startDateInput');
const bidProjectManager = $('#projectManagerInput');
const submitBidButton = $('#submitBidButton');


async function submitBid(){
    //setup post data arguments
    const submitURL = 'https://oddjobs.ga/projects/create'
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

    //check for an allBidObjects in local storage
    var allBidObjects = JSON.parse(localStorage.getItem("allBidObjects"));

    //check if allbidobjects is valid
    if(allBidObjects)
    {
      //set new current bid
      allBidObjects["projectID" + projectID] = bidObject;
      //write updated allbidobjects to local storage
      localStorage.setItem("allBidObjects", JSON.stringify(allBidObjects));
    }else
    {
      //setup new all bids objects
      var newAllBidObjects = {};

      //set new current bid
      newAllBidObjects["projectID" + projectID] = bidObject;
      //write new allbidobjects to local storage
      localStorage.setItem("allBidObjects", JSON.stringify(newAllBidObjects));
    }
    window.location.reload();
};

function loadCurrentBidObject()
{
  //get all bid objects from local storage
  var allBidObjects = JSON.parse(localStorage.getItem("allBidObjects"));
  //check if allbidobjects is valid
  if(allBidObjects)
  {
    //get project id from local storage
    const projectID = localStorage.getItem('projectToLoad');
    //check for bid on current project
    if(allBidObjects["projectID" + projectID] !== undefined)
    {
      //
      var currentBidObject = allBidObjects["projectID" + projectID];
      
      bidStartDate.val(currentBidObject.estimatedStartDate);
      bidNumberEmployees.val(currentBidObject.dedicatedEmployees);
      bidProjectManager.val(currentBidObject.projectManager);
      bidAmountPrice.val(currentBidObject.bidAmount);
      
      
      // bidObject01

      //after loading local storage values into dom disable fields
      bidStartDate.attr("disabled", true); 
      bidNumberEmployees.attr("disabled", true);
      bidProjectManager.attr("disabled", true);
      bidAmountPrice.attr("disabled", true);
      submitBidButton.attr("disabled", true);  //this 5th attr is for the submit button
    }
  }
}

submitBidButton.click(submitBid);

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
    const viewAllURL = 'https://oddjobs.ga/projects/viewall';
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
    loadCurrentBidObject();
};

loadPage();