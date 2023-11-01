export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
export const firstNameRegex = /^[a-zA-Z]{2,}$/
export const lastNameRegex = /^[a-zA-Z]{2,}$/
export const usernameRegex = /^[a-zA-Z0-9]{2,}$/
export const titleRegex = /^[\w\s!@#$%^&*()_+-=[\]{};':"\\|,.<>/?`~]{2,50}$/
export const descriptionRegex = /^[\w\s!@#$%^&*()_+-=[\]{};':"\\|,.<>/?`~]{2,1000}$/
export const maxApplicantsRegex = /^[0-9]{1,10}$/
export const timeEventRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/
export const typeEventRegex = /\b(public|private)\b/
export const countryRegex = /^[\w\s!@#$%^&*()_+-=[\]{};':"\\|,.<>/?`~]{2,20}$/
export const stateRegex = /^[\w\s!@#$%^&*()_+-=[\]{};':"\\|,.<>/?`~]{2,30}$/
export const cityRegex = /^[\w\s!@#$%^&*()_+-=[\]{};':"\\|,.<>/?`~]{2,40}$/
export const adressRegex = /^[\w\s!@#$%^&*()_+-=[\]{};':"\\|,.<>/?`~]{2,50}$/
export const zipCodeRegex = /^\d{4}(?:[-\s]\d{4})?$/
export const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/
