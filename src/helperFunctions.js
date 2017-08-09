
// var myHeaders = new Headers();
//
// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'no-cors',
//                cache: 'default' }

export function fetchData (url, num) {
    var records = num ==== undefined ? '/5/' : '/' + num + '/';
    var endpoint = url + records;
  // return fetch('http://54.213.83.132/hackoregon/http/oregon_individual_contributors/5/', {
  return fetch(endpoint, {

    // mode: 'no-cors'
  })
    .then(
     function(response){
       return response.json();
      }
    )
    .then(function(parsedData) {
      // data here
      return parsedData;
  });
}
