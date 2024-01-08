export const isAnEmail = (value) => value.includes("@");
export const isNumbers = (value) => !isNaN(value);
export const doesNotCountainsNumbers = (value) => !/\d/.test(value); // regex
export const isPhone = (value) => true
// export const isPassword = (value) => /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/; // au moins 1 chiffre, au moins 1 lower et 1 upper case, et au moins 7 carac 

export const isInami = (value) => {
    let isNbr = isNumbers(value);
    let stringValue = value.toString().trim(); 
    console.log(stringValue);
    console.log(stringValue.length);

    let discipline = stringValue.charAt(0);
    let suiteNumber = stringValue.slice(1,6);
    let checkDigit = stringValue.slice(6, 8);
    let qualification = stringValue.slice(8, 11);

    console.log(isNbr);
    console.log("inami: ", value);
    console.log(`${discipline} --- ${suiteNumber} --- ${checkDigit} --- ${qualification}`);

    
    return true;
}