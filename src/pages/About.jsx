import { React, useState } from 'react';

import pic1 from "../assets/profilepics/pic1.JPG";
import pic2 from "../assets/profilepics/pic2.JPG";
import pic3 from "../assets/profilepics/pic3.JPG";
import pic4 from "../assets/profilepics/pic4.JPG";
import pic5 from "../assets/profilepics/pic5.JPG";
import pic6 from "../assets/profilepics/pic6.JPG";

function About() {
    const pictureChoices = [pic2, pic3, pic4, pic5, pic6]
    const [chosenPic, setNewPic ] = useState(pic1);
    
    let index = 0;

    function changePicture() {
       
        index++;
        index %= pictureChoices.length;
        console.log(pictureChoices[index]);

        if (index < pictureChoices.length - 1) {
            setNewPic(pictureChoices[index]);
        }
        


        // let i = 1
        // i++;
        // console.log(pictureChoices[i]);

        // while (i < pictureChoices.length) {
        //     console.log(i);
        //     console.log(pictureChoices[i]);
        //     i++
        // }

        // for (var i = 0; i < pictureChoices.length; i++) {
        //     console.log(pictureChoices[i]);
        //     setNewPic(pictureChoices[i]);
        // }
        
    //    var index = 0;
    //    index++;
       
        
        // flips through the pics randomly
        // var index = Math.floor(Math.random() * pictureChoices.length)
        

        // var randomPicture = pictureChoices[index];
        // setNewPic(pictureChoices[i]);
        
    }

    return (
        <div onClick={changePicture}><img src={chosenPic} className="profile-pic" alt="profile images"></img></div>
    )
}

export default About;