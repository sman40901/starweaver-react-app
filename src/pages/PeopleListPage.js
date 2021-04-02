import React, {useState} from 'react';
import {PeopleList} from '../PeopleList'

const people =[{
    name : 'Ho',
    age : 40,
    hair : 'brown',
    id:1
  },{
    name : 'John',
    age : 45,
    hair : 'black',
    id:2
  },{
    name : 'Jack',
    age : 46,
    hair : 'black',
    id:3
  }];
  

  export const PeopleListPage = () => {
      return(
      <>
      <h3>Person</h3>
      <PeopleList people={people}/>
      </>
      );
  }