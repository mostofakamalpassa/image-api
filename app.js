// api key =   563492ad6f917000010000011974dcda08ab4e359b0178b77dc6b7a2


const API_KEY = `563492ad6f917000010000011974dcda08ab4e359b0178b77dc6b7a2`;

// https://pixabay.com/api/

// https://api.pexels.com/v1/

const LoadDataFormImageUrl = async ()=>{

    const image = document.getElementById('search-image');
    let url = '';
    console.log(image.value);
    if(image.value.trim().toString() !== ''){
       url =  await fetch(`https://pixabay.com/api/?key=25997241-6c7f0ec8f64982fb05b632554&q=${image.value}`);
     
    } else{
        // const url = await fetch(`https://api.pexels.com/v1/search?query=home`);
      url =  await fetch(`https://pixabay.com/api/?key=25997241-6c7f0ec8f64982fb05b632554&q=flower`);
    }
//  const   url = await fetch(`https://pixabay.com/api/?key=25997241-6c7f0ec8f64982fb05b632554&q=flower`);
    
    const urlJsonFromatd = await url.json();
    console.log(urlJsonFromatd);
    displayImage(urlJsonFromatd.hits)

   
}

LoadDataFormImageUrl();

document.getElementById('search-image').addEventListener('keypress', function(event){

    if(event.keyCode === 13){
        LoadDataFormImageUrl();
    }
})



const displayImage = datas => {
    
    const gridParent = document.getElementById('image');

    gridParent.innerText = '';

    // console.log(datas);

    datas.forEach((data, index)=>{
        const creatediv = document.createElement('div');
        creatediv.setAttribute('class', 'image-div');
        creatediv.innerHTML = `<img src= '${data.largeImageURL}' alt = '' />`;

        gridParent.appendChild(creatediv);
    })


    

    
}