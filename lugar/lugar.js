const axios=require('axios');

const getLugarLatLng= async(dir)=>{

const encodedUrl=encodeURI(dir);

const API_KEY='998a28c13dfb74794ae7580dade2f651';

const instance = axios.create({
    baseURL: `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodedUrl}`,
  });

const resp= await instance.get();

if(resp.data.location===0){
    throw new Error(`No hay resultados para ${dir}`);
}

const data=resp.data.location;
const direccion = data.name;
const lat = data.lat;
const lng=data.lon;



return{
    direccion,
    lat,
    lng
}
}

module.exports={
    getLugarLatLng

}