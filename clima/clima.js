const axios=require('axios');


const getClima= async(lat,lon)=>{
    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=087b76a271f554fe7595b2272091d752&units=metric`)
    

    return resp.data.main.temp;



}

module.exports={
    getClima
}