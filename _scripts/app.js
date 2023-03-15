'use strict';

const url = 'https://us-street.api.smartystreets.com/street-address?auth-id=161930695241786352&street=22%20Degroat%20Rd&city=Sandyston&state=NJ&zipcode=07827&candidates=10';

const createRequest = function(url){
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (url) => {
        if(httpRequest.readyState === 4){
            console.log(httpRequest.responseText);
        }
    });
    httpRequest.open('GET', url);
    httpRequest.send();
};

createRequest(url);