import React from 'react';

export const PeopleListItem = ({people}) => {
     return(
        <div className="people">
            { people.map(user => (
            <div className="person" key={user.id}>
                {user.name}
                <p>{user.hair}</p>
            </div>
            ))}
        </div>
    );
 }