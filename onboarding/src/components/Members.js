import React from 'react'

export default function Members(props) {
    const {member} = props
    return (
        <div>
            <img src={member.avatar}/>
            <h3>{member.first_name} </h3>
            <h4>{member.email} </h4>
            
        </div>
    )
}
