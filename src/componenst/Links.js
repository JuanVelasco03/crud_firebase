import React from 'react';
import LinkForm from './LinkForm';

import {db} from "../firebase/fireBase";


const Links = () =>  {
  const addOrEditLink = async  (linkObject) => {
    console.log(linkObject);
    await db.collection('links').doc().set(linkObject);
    console.log("Nueva Tarea Guardada")
  }

  return <div>
    <LinkForm addOrEditlink ={addOrEditLink}/>
    <h2>links</h2>
  </div>
}

export default Links;