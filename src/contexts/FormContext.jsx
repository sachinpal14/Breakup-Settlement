import React from "react";
import { createContext, useContext, useState } from "react";

const FormContext = createContext();


const FormContextProvider = ({ children }) => {

    const [duration, setduration] = useState("")
    const [gifts, setgifts] = useState("")
    const [stipend, setstipend] = useState('')
    const [check,setcheck] =useState(true)
    const [reason,setreason] =useState("")
    const [contact ,setcontact ] =useState("")
    const [count,setcount]=useState(0)
    const [warning,setwarning]=useState(0)

     
    const data ={
        duration,setduration,gifts,setgifts,stipend,setstipend,check,setcheck,reason,setreason,contact,setcontact,count,setcount,warning,setwarning
    }



  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export default FormContextProvider;

export const useForm =()=> useContext(FormContext);
