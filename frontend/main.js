window.addEventListener('DOMConentLoaded', (event) =>{
    getVisitCount();
})


const functionApiUrl = 'https://getresumecount.azurewebsites.net/api/GetResumeCounter?code=JUjIEkFgvOl8Zu684bFB40VAW2cYZ9CIXzf-b2hL0LtYAzFuLX3jSg=='
const localfunctionApiUrl = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(localfunctionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}