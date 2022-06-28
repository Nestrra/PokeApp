import { useState } from "react";




export const useForm = <T extends Object> ( form: T ) => {
  

    const [state, setState] = useState( form );


    console.log(state);

    const handleOnChange = (value: string, filed: keyof T) => {


        setState({
            ...state,
            [filed]: value,

        });

    };


    return{
        ...state,
        form: state,
        handleOnChange,

    };



}


