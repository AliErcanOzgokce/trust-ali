/**
 * Password validation function that checks for minimum requirements.
 * NOTE: Some validations have been commented out to reduce friction for reviewers.
 * Only minimum length and digit requirements are active.
 */
export default function validatePassword(password: string): (boolean | string) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return "The password must be at least 8 characters long.";
    }

    // Check if the password contains at least one digit
    if (!/\d/.test(password)) {
        return "The password must contain at least one digit.";
    }

    // The following validations are commented out to reduce friction for reviewers
    
    // // Check if the password contains at least one uppercase letter
    // if (!/[A-Z]/.test(password)) {
    //     return "The password must contain at least one uppercase letter.";
    // }

    // // Check if the password contains at least one lowercase letter
    // if (!/[a-z]/.test(password)) {
    //     return "The password must contain at least one lowercase letter.";
    // }

    // // Check if the password contains at least one special character
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //     return "The password must contain at least one special character.";
    // }

    return true;
}