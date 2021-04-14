import React from "react";
import Menu, {Menu2} from "./menu";

import Card from "./card";

function Header() {

    return(
        <>
        <Menu />
        <Menu2 />
        <Card price="10" name="Hej"  />
        </>
    )
}

export default Header;