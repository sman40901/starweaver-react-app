import React, {useState} from 'react';
import {PeopleList} from '../PeopleList'

const people =[{
    name : 'Ho',
    age : 40,
    hair : 'brown'
  },{
    name : 'John',
    age : 45,
    hair : 'black'
  }];
  

  export const PeopleListPage = () => {
      return(
      <>
      <h3>Person</h3>
      <PeopleList people={{people}}/>
      </>
      );
  }