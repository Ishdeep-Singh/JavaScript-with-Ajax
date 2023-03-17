'use strict';

//const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=161930695241786352&street=22%20Degroat%20Rd&city=Sandyston&state=NJ&zipcode=07827&candidates=10';

const smartyUrl = 'https://us-street.api.smartystreets.com/street-address?auth-id=161930695241786352&candidates=10';

const parksUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=lagsDOc4O8JDhdD5qeEuqQfwad46Sh7YwMBJ0ED8';

const addressField = document.querySelector('#address');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
// const $zipField = $('#zip');
const zipField = document.querySelector('#zip');

const updateUISuccess = function(data){
    console.log(data);
};

const updateUIError = function(error){
    console.log(error);
};

const responseMethod = function(httpRequest){
    if(httpRequest.readyState === 4){
        if(httpRequest.status === 200){
            updateUISuccess(httpRequest.responseText);
        } else {
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
        }
    }
};

const createRequest = function(url){
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
    httpRequest.open('GET', url);
    httpRequest.send();
};

const checkCompletion = function(){
    if(addressField.value !== '' &&
        cityField.value !== '' &&
        stateField.value !== ''){
            const requestUrl = smartyUrl + '&street=' + addressField.value + '&city=' +cityField.value + '&state=' + stateField.value;

            createRequest(requestUrl);
        }
}

//createRequest(smartyUrl);
//createRequest(parksUrl);

addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);