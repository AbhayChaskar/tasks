import React, { Component } from 'react'

const Person=(Props)=>{
        return (
            <div>
                <p onClick={Props.myClick}>My Name is {Props.name} and my Age is {Props.age}!{Props.children}</p>
            </div>
        )
}
export default Person;