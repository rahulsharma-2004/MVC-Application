import React,{useState} from 'react';

function MultiStepForm(){
    const[step,setStep] = useState(1);
    const[fromData,setFormData] = useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormData({
            ...fromData,
            [name] : value
        });
    }
    const nextStep = () =>{
        setStep(step -1);
    };
    const prevstep = () => {
        setStep(step -1);
    };
    
}