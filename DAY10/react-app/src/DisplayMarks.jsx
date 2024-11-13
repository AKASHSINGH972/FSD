import React from 'react'
import Marks  from './Marks.jsx';

const DisplayMarks = () => {
    const students=[
        {name:'Akash', roll:283, m1:78 ,m2:89, m3:78},
        {name:'amit', roll:2823, m1:78 ,m2:89, m3:78},
        {name:'Ayush', roll:183, m1:78 ,m2:89, m3:78},
        {name:'Aman', roll:2483, m1:78 ,m2:89, m3:78},
        {name:'Anshul', roll:53, m1:78 ,m2:89, m3:78},

    ];
  return (
    <div>
     {   students.map((student,index) => (<Marks key={index} name={student.name} roll={student.roll} m1={student.m1} m2={student.m2} m3={student.m3}/>))
 } </div>
  )
}

export default DisplayMarks;