import React, {useState} from 'react';

const useValidation = (value, validator, errorMessage) => {
    const isValid = validator(value);
    return { 
        isValid,
        errorMessage: isValid? "" : errorMessage 
    };
}
 
export default useValidation;