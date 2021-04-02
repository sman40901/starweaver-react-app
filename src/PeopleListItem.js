import React from 'react';

export const PeopleListItem = ({people}) => {
    const peopleListItems = people.map((user) => {
           return(
                <div className="person" key={user.id}>
                    {user.name}
                    <p>{user.hair}</p>
                </div>
           );
    });
     return(
        <div className="people">
            {peopleListItems}
        </div>
    );
}