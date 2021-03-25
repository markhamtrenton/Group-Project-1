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