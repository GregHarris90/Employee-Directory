import React from "react";

function Footer() {


    const currentYear = new Date().getFullYear();

    return(
        <p>
            Copyright &#169 {currentYear}
        </p>
    );
}

export default Footer;