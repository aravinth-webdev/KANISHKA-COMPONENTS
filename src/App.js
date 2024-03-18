
import React from "react";
import './App.css'
import { useState } from "react";

export default function Portfolio(){
   
return ( <div>
   <Main/>
   <Career/>
   <Expertice/>
   <Owner/>
   <Contact/>
   <Project/>
   <Aboutus/>
        <Saythanks/>
    </div>
)}

let time= new Date().getHours()

   function Nav(props){
       
     return(
       <header style={{backgroundColor:props.style2}}>
       <img src="./logo.jpg" width={"15%"} height={"15%"} alt="logo"></img>

        <nav id="head">
        <ul>
        <li><i class="fa-solid fa-house"><a href="">HOME</a></i></li>
        <li><i class="fa-solid fa-screwdriver-wrench"><a href="#projects">OUR PROJECT</a></i></li>
        <li>
        <i class="fa-solid fa-phone"><a href="#hire me2" id="contact">CONTACT US</a></i>
        </li>
        </ul>
        <i class="fa-solid fa-bars"></i>
        </nav>
        </header>
        )
}   

function Main(){
   const [fax,faxclr] = useState("white")
   const [color2,altclr2] = useState("teal")
   const[black,blackclr]=useState("black")  
   const[cornsilk,cornsilkclr]=useState("cornsilk")
   const[hello,helloclr]=useState(false)

   function valid(x){
      if(x>=5 && x<12){
        return `"GREETINGS OF GOOD MORNING"`
      }
      else if( x>=12 && x<18){
         return `"GREETINGS OF GOOD AFTERNOON"`
      }
      else if(x>=18 && x<20){
        return `"GREETINGS OF GOOD EVENING"`
      }
      else{
         return `"GREETINGS OF GOOD NIGHT"`
      }
      }


    return(
       <div>
       <Nav style2={fax} />
       <div id="darkmode" style={{backgroundColor:black,color:cornsilk}}>
       <p>{valid(time)}</p>
       <i class="fa-solid fa-circle-half-stroke" onClick={
         ()=>{
          faxclr(fax==="white"?"black":"white")
          altclr2(color2=="teal"?"white":"teal")
          blackclr(black=="black"?"cornsilk":"black")
          cornsilkclr(cornsilk=="cornsilk"?"black":"cornsilk")
         } 
      
      }></i></div>
       <div id="profile" style={{backgroundColor:fax}}>
       <div id="myname">
       <h3><h2 id="kanishka">KANISHKA</h2> AUTO COMPONENTS</h3>
       <label>Manifacturing of Automobile Parts,Tooling System and Electrical & Electronics Parts,Excellence innovation built into every design.</label>
       
       <div id="submit">
       <button onClick={()=>{
         // let login = "MAKE AN APPOINTMENT"
         // document.getElementById("login").innerHTML="register here"
        helloclr(hello==false?true:false)
       }} >APPOINTMENT HERE<i class="fa-solid fa-arrow-down-long"></i></button>
       
       <p id="register5">{hello && <form id="loginform" onChange={
        (event)=>{
         event.preventDefault()
      
        }

       } >
         
         <div id="login">
         <h4>MAKE APPOINTMENT</h4>
          
         <label id="cusname">customer name :</label>
         <input type="text" name="cusname" placeholder="enter name" required></input>
         <br></br>
         <label id="cusemail" >customer email :</label>
         <input type="email" name="cusemail"  placeholder="enter email" required></input>
         <br></br>
         <label id="phno" >contact number :</label>
         <input type="number" name="phno" placeholder="enter contact number" required></input>        
         <br></br>
         <button type="submit" onClick={()=>{
              
            alert("Make sure the appointment")
            alert("'Request Received',we will call you")
             
         }} >SUBMIT</button>
         </div>
         
         </form>}</p>
       </div>
       </div>
       
       <div id="arrow">
       <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
       </div>
       </div>
       </div> 
     )
 }

 function Career(){
      return(
       <div id="career">
       <h3 >KANISHKA AUTO COMPONENTS </h3>
       <p>Kanishka Auto Componenets is Manifacturing of Automobile Parts and tooling systems,also processing facility specializing in press forming,angle bending,and welding of tubular and sheet metal components.</p>
      </div>
     )
 }
   function Owner(){
      return(
         <div id="profile2">
         <div id="img5">
         <img src="./image1.jpg" height={"300px"} width={"300px"}></img>
          </div>
          <div id="para">
         <p>Take the next step towards efficient manufacturing and precision processing. Schedule an appointment today to experience our top-notch services firsthand. Contact us now to secure your spot and discuss your specific requirements.</p>
           </div>
       </div>
      )
   }
 function Expertice(){
       return(
       <section>
       <div id="skill">
       <h3>BUILDING THE FUTURE</h3>
       <div className="skill-title">
       <label className="software">OUR EXPERTICE</label>
       <br></br>
       <div className="images">
       <img src="./expertice1.jpg" width={"220"} height={"220"} alt="htmlskill"></img>
       <label className="skill-name">AUTOMOBILE PARTS</label>
       <p>Automobile parts can also be upgraded to improve the performance of an automobile. For example, you can upgrade the engine, transmission, or brakes to make your automobile faster, more fuel-efficient, or safer. Automobile parts can also be customized .</p>
       <br></br>
       <div className="images">
       <img src="./expertice2.jpg" width={"220"} height={"220"} alt="cssSkill"></img>
       <label className="skill-name">TOOLING SYSTEM</label>
       <p>No matter what industry you are in, tooling systems can help you improve your manufacturing operations. If you are looking for ways to improve the quality, cost-effectiveness, and flexibility of your production, you should consider investing in tooling systems.</p>
       </div>
       <br></br>
       <div className="images">
       <img src="./expertice3.jpg" width={"220"} height={"220"} alt="cssSkill"></img>
       <label className="skill-name">ELECTRICAL & ELECTRONICS</label>
       <p>Electrical and electronic parts are essential for the modern world. They allow products to function properly, to be more efficient, and to be more user-friendly. As new technologies are developed, electrical and electronic parts will continue to evolve.</p>
       </div>
       <br></br>
       </div>
       </div>
      </div>

      </section>
    )
 }


 function Project(){
   return(
      <div id="projects" >
      <h3>OUR PROJECTS</h3>
      <div id="project-list">
      <img src="./project1.jpg" width={"220"} height={"180"}></img>
      <img src="./project2.jpg" width={"220"} height={"180"} ></img>
      <img src="./project3.jpg" width={"220"} height={"180"} ></img>
         
      </div>
      </div>
   )
 }

function Contact(){
     const[phone,setphone]=useState(false)
     const[appnum,setphone2]=useState(false)
       return(
       <div className="contact" id="hire me2">
       <h3>CONTACT US</h3>
       <div id="hireme">
       <div className="source">
       <i class="fa-regular fa-envelope"></i>
       <a href="#">EMAIL</a>
       </div>
       <div className="source" >
       <i class="fa-solid fa-phone-volume"></i>
       <a onClick={()=>{
         setphone(phone===false?true:false)
       }}>PHONE-1</a>
       {phone && <p>P.SARAVANAN - 9994974500</p>}
       </div>
       <div className="source">
       <i class="fa-solid fa-phone-volume"></i>
       <a onClick={
         ()=>{
            setphone2(appnum===false?true:false)
         }
       }>PHONE-2</a>
       {appnum && <p> P.MANIKANDAN - 9790135181</p>}
      <br></br>
       
        <br></br>
       </div>
       <div id="media">
       <a href="#"><i class="fa-brands fa-youtube"></i> YOUTUBE</a>
       <br></br>
       <a href="#"><i class="fa-brands fa-facebook" id="facebook" ></i>FACEBOOK</a>
       <br></br>

         <a href="#"><i class="fa-brands fa-instagram"></i>INSTAGRAM</a>
       </div>
       </div>
       </div>
      )
   }

function Aboutus(props){
   return(
       <div id="footer">
       <div className="address">
       <label>OUR EXPERTICE</label>
       <ul>
       <li>AUTOMOBILE PARTS</li>
       <li>TOOLING SYSTEM</li>
       <li>ELECTRICAL $ ELECTRONICS</li>
       </ul>
       </div>
      <div id="programming">
       <img src="./future.jpg" width={"360px"} height={"240px"}></img>
       </div>
      </div>
      )
}

function Saythanks(){
   return(
      <div id="thanksmsg">
      <div className="letters">
      <h2>THANKS FOR VISITING  US !<i class="fa-regular fa-handshake"></i></h2>
      <label className="letters">Have a good day.......</label>
      </div>
      </div>

   )
}
