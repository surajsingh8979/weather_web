const cityname= document.getElementById('cityName');
const sumitbtn=document.getElementById('sumitbtn');
const city_nmae= document.getElementById('city_nmae');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status= document.getElementById('temp_status');
const data_hide= document.querySelector('.middle_layer');


const getinfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.nodeValue;
    if(cityval === ""){

        city_nmae.innerText= 'plz write the name before the search';
        datahide.classList.add('data_hide');
    }
    else{
        try {
    let url =api.openweathermap.org/data/2.5/weather?q=$:{cityval},appid={be98db252107d93b15f132fd2d4973e6}
    
const cityname= document.getElementById('cityName');


    const response= await fetch(url);
    const data = await response.json();
    const arrData=[data];
   
    city_nmae.innerText= '${arrData[0].name},${arrData[0].sys.country}'

    temp_real_val.innerText = arrData[0].main.temp_real_val;
    const tempMood = arrData[0].weather[0].main;

    if(tempMood== "clear"){
        temp_status.innerHTML=
        "<i class='fas fa-sun' style='color: #eccc68;' > </i>";
    }
    else if(tempMood=="clouds"){
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color: #f1f2f6;' > </i>";
    }else if (tempMood== "Rain"){
        "<i class='fas fa-rain' style='color: #a4b0be;' > </i>";
    }else{
        temp_status.innerHTML=
        "<i class='fas fa-cloud' style='color: #f1f2f6;' > </i>";
    }
    datahide.classList.remove('data_hide');
    }
catch{
            city_nmae.innerText= 'plz enter the city name properly';
            datahide.classList.add('data_hide');
        }
}
}

sumitbtn.addEventListener('click',getinfo);
