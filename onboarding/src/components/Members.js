import React from 'react'
import styled from 'styled-components'

const MemberDiv = styled.div `

    background: white;
    padding:5%;
    border-radius:3%;
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    width:70%


    img{
        width:70%;
        border-radius:50%;
        transition:all .4s ease-in-out;

    }

    div{
        display:flex;
        flex-direction:column;
    }


    margin:3%;
    transition: all .23s ease-in;
    &:hover{
        background:lightslategray
        
    }

    &:hover img{
        border:2px solid blue;
    }


`

export default function Members(props) {
    const {member} = props
    return (
        <MemberDiv>
            <img src={member.avatar}/>
            <div>
                <h3>{member.first_name} </h3>
                <h4>{member.email} </h4>
            </div>
            
        </MemberDiv>
    )
}
