// fetch('https://dummyjson.com/recipes').then((res)=>{

//     return res.json()

// }).then((data)=>{
//     console.log(date.recipes[0].image,'dikh geya');
//     let h1= document.createElement('h1')
//     //  data.map((a)=>{
//     //     console.log(a.title);
    
//     h1.innerText=data.recipes[0].name
//     img.setAttributes('src',data.recipes[0].images)
//     dispatchEvent.appendChild(img)

//         })

//     .catch((err)=>{
//         console.log(err)
//     })

// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let list = document.getElementById('list');


// function fetchData(searchText) {
//     axios.get(`https://api.tvmaza.com/search/shows?q=${searchText}`)
//     .then(function(response){
//         manipulateDOM(response.data)

//     })
// }
// function manipulateDOM(data){
//     while(list.firstChild){

//     }

//     for (let d of data){
//         if (d.show.image){
//             let img = document.createElement('img');
//             img.setAttribute('src', d.show.image.original);
        
//         }
//     }
// }
//  btn.addEventListener('click', function() {
//     let searchText = input.value;
//     let data = fetchData(searchText);
//  })

let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');

function fetchData(searchText) {  axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
  .then(function(response) {    manipulateDOM(response.data);
  })}
function manipulateDOM(data) {
  while(list.firstChild) {    // list.firstChild.remove();
  }
  for (let d of data) {
    if (d.show.image) {      let img = document.createElement('img');
      img.setAttribute('src', d.show.image.original);      list.appendChild(img);
    }    }
}
btn.addEventListener('click', function() {  let searchText = input.value;
  let data = fetchData(searchText);})