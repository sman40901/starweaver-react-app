import React from 'react';

export const PeopleListItem = ({people}) => {
    return(
        <>
       { people.map( person => (
        <div className = "list-item-container" key = {person.name}>
            <h3>{person.name}</h3>
            <p>age: {person.age}</p>
            <p>hari color: {person.hair}</p>
        </div>
       ))}</>
    );
 }