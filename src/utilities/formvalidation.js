export const emailValidation = (inputvalue) => {
   let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   return emailRegex.test(inputvalue);
}

export const passwordValidation = (inputvalue) => {
   let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
   return passwordRegex.test(inputvalue);
}