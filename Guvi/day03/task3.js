let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true)
xhr.onload = function () {
    let response = JSON.parse(xhr.responseText);
    console.log(response);
    for(i=0;i<response.length;i++){
       console.log(`countries name:- ${response[i].name.common} , region :- ${response[i].region} , subregion :- ${response[i].subregion}`)
    }
};
xhr.send();