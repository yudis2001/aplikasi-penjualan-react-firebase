import React from 'react';

function List(props) {
    return(
        <ul>
            {props.inArray.map((array, index) =>  <li  key={index}> {array} </li> ) }
           
        </ul>
    )

}

export default List ;