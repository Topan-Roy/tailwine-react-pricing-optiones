import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Markschart = ({marksPromice}) => {
    const markdataRes = use(marksPromice);
    const markdata =markdataRes.data;
//   data procesing for the chart
const markchartdata= markdata.map(studentdata =>{
    const student ={
         id:studentdata.student_id,
         name:studentdata.name,
         physics:studentdata.marks.physics,
         chemistry:studentdata.marks.chemistry,
        math:studentdata.marks.math

    }
    const avg =(student.physics +student.chemistry +student.math) /3;
    student.avg =avg;
    return student;
})
console.log(markchartdata)
    return (
        <div>
            <BarChart width={500} height={300} data={markchartdata}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default Markschart;