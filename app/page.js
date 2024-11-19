import Title from "./components/Title";
import Content from "./components/Content";
import Button from '@mui/material/Button';
import React {usesate,useeffect }from "react";




function home(){
  return(
  <div>
  
    <Button variant="contained">Contained</Button>


    <Title heading="MAKERERE"/>
    <Content details="the campus IS FAR"/>
    <br/>
    <Title heading="UCU"/>
    <Content details="the campuS is nice"/>
    <br/>
    <h1>KFC APPLICATION</h1>
    <p>This is interesting</p>
    <h2>pork is  beyond sweet </h2>
    <h3>life is short so dont waste time on regret </h3>
    <p>life is easy</p>
    <Title/>
    <Content/>
    <Button variant="contained"disabled={true}>Contained</Button>
    <Button variant="text">text</Button>
    


  </div>
  
  );
}
export default home;


 


  
          
      
