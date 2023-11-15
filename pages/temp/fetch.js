fetch("goldData.json")
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data){
    console.table(data.time);
    console.table(data.hum);
    console.table(data.temp);
}