import React from 'react'
import BarnBarn from './BarnBarn'
import Child from "./Child"
import Menu from "./Menu"

function Parent() {
    return (
        <div>
              

            <Child>    
                <BarnBarn/>     
            </Child>
    

        </div>
    )
}

export default Parent
