//url is a string pointing to our API.
//data is an object in JSON notation, NOT a string. 
async function postData(url, data){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json()
}


function appendProjectData(projectID){
    let projectObj;
    for (const project of projectsList){
        if (project.id === projectID){
            projectObj = project;
            return projectObj;
        } else{
            console.log(project.id);
        }
    };
    //const projectName = $('#projectName');
    //const projectInformation = $('#projectInformation');
    $('#projectName').text(`${projectObj.name}`);
    $('#projectInformation').append(`<li>Requesting Client:${projectObj.client}</li>`);
    $('#projectInformation').append(`<li>Estimated Project Cost:${projectObj.cost}</li>`);
    $('#projectInformation').append(`<li>Project Location:${projectObj.location}</li>`);
    $('#projectInformation').append(`<li>Estimated Time to Complete:${projectObj.time}</li>`);
    $('#projectInformation').append(`<li>Description of Project<p>${projectObj.description}</p></li>`);
};

function loadPage(){
    const projectID = localStorage.getItem('projectToLoad');
    appendProjectData(projectID);
};

loadPage();

