//companyExists();

//access "view projects" button #continue-projects
$('#continue-projects').click(function(){
    onViewProjects();
});

function setCompanyPage ()
{
    // check for company page in local storage.
    let companyPage = JSON.parse(localStorage.getItem('companyValues'));
    //if company object exists then write its values to html
    if (companyPage) {
        //access h1 tag that welcomes new company
        let welcomeTitle = $('#welcomeTitle');
        //access image tag that holds response from unsplash api
        let companyImage = $('#companyImage');
        //update company image source attribute to companyPage.imgURL
        companyImage.attr("src", companyPage.imgURL);
        //update welcome title to say `Welcome, ${companyPage.name}!`
        welcomeTitle.text(`Welcome, ${companyPage.name}!`);

    } else {
        // redirect to back to index for registration page
        window.location.href = './index.html';
    }


}

setCompanyPage();

//direct user to home screen
function onViewProjects()
{
    window.location.href = './home.html';
}


