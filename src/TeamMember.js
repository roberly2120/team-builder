import React from 'react';

export default function TeamMember(props) {
    const { details, memberToEdit} = props;


    return (
        <div>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <button>edit</button>
        </div>
    )
}