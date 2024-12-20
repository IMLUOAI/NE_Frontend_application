// eslint-disable-next-line
const validateEmail = (email) => {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
 return emailRegex.test(email);
}
// eslint-disable-next-line
const validatePassword = (password) => {
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
 return password.length >= 8;
}


// const validateAvatarUrl = (avatar) => {
//     const urlPattern = /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
//     return urlPattern.test(avatar);
// }

const validateUserName = (username) => {
    const userNamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    return userNamePattern.test(username)
}


module.exports = {
    validateEmail,
    validatePassword,
    // validateAvatarUrl,
    validateUserName
}
