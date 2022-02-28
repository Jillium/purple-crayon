import { React, useState } from 'react';

import pic1 from "../assets/profilepics/pic1.JPG";
import pic2 from "../assets/profilepics/pic2.JPG";
import pic3 from "../assets/profilepics/pic3.JPG";
import pic4 from "../assets/profilepics/pic4.JPG";
import pic5 from "../assets/profilepics/pic5.JPG";
import pic6 from "../assets/profilepics/pic6.JPG";

function About() {

    const [chosenPic, setNewPic ] = useState(pic1);
    const pictureChoices = [pic1, pic2, pic3, pic4, pic5, pic6]
    

    function changePicture() {


        
       
        
        // flips through the pics randomly
        var index = Math.floor(Math.random() * pictureChoices.length)
        

        var randomPicture = pictureChoices[index];
        setNewPic(randomPicture);
        
    }

    return (
        <div  onClick={changePicture}><img src={chosenPic} className="profile-pic" alt="profile images"></img></div>
    )
}

export default About;