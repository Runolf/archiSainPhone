export const isAnEmail = (value) => value.includes("@");
export const isNumbers = (value) => !isNaN(value);
export const doesNotCountainsNumbers = (value) => !/\d/.test(value); // regex
export const isPhone = (value) => true
// export const isPassword = (value) => /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/; // au moins 1 chiffre, au moins 1 lower et 1 upper case, et au moins 7 carac 