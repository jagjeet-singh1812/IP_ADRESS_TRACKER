const lbtn=document.querySelector(".button");
const reset=document.querySelector(".reset")
const ip=document.querySelector(".ip_adress");
const  city=document.querySelector(".CITY");
const  region=document.querySelector(".REGION");
const  geography=document.querySelector(".GEO");
const  time=document.querySelector(".time");
const  postal=document.querySelector(".POSTAL-CODE");
const  organisation=document.querySelector(".ORG");
const  country=document.querySelector(".CALLING_CODE");

// btn.addEventListener("click",()=>{
//     fetch("https://ipapi.co").then((response)=> response.json()).then((data)=>console.log(data));
// }
// )


lbtn.addEventListener("click",()=>{
    axios.get("https://ipapi.co/json/").then((response)=>{
        console.log(response);
        ip.innerHTML=`IP: ${response.data.ip}`;
        city.innerHTML=`CITY: ${response.data.city}`;
        region.innerHTML=`REGION: ${response.data.region}`;
        geography.innerHTML=`CO-ORDINATES: ${response.data.latitude} , ${response.data.longitude} `;
        time.innerHTML=`TIME-ZONE: ${response.data.timezone}`;
        postal.innerHTML=`POSTAL-CODE: ${response.data.postal}`;
        organisation.innerHTML=`ORG: ${response.data.org}`;
        country.innerHTML=`COUNTRY: ${response.data.country_name}`;
    });
}
);

reset.addEventListener("click",()=>{
        ip.innerHTML=`IP:`;
        city.innerHTML=`CITY: `;
        region.innerHTML=`REGION: `;
        geography.innerHTML=`CO-ORDINATES:`; 
        time.innerHTML=`TIME-ZONE: `;
        postal.innerHTML=`POSTAL-CODE: `;
        organisation.innerHTML=`ORG:`;
        country.innerHTML=`COUNTRY: `;
}
);