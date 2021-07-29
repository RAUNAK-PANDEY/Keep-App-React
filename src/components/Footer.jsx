import React from 'react';
 

const currentDate= new Date();
const currentYear = currentDate.getFullYear();
function Footer(){
    return (<div>
        <footer> <p>Copyright ©  {currentYear}</p>
        <p>Raunak Pandey</p></footer>
    </div>);

}

export default Footer;
