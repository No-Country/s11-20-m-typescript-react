import {
  adressRegex,
  cityRegex,
  countryRegex,
  descriptionRegex,
  emailRegex,
  firstNameRegex,
  lastNameRegex,
  maxApplicantsRegex,
  passwordRegex,
  stateRegex,
  timeEventRegex,
  titleRegex,
  typeEventRegex,
  usernameRegex,
  zipCodeRegex
} from './regex.utils'

interface Pattern {
  value: RegExp
  message: string
}

export const firstNamePattern: Pattern = {
  value: firstNameRegex,
  message: 'First name must be at least 2 characters long'
}

export const lastNamePattern: Pattern = {
  value: lastNameRegex,
  message: 'Last name must be at least 2 characters long'
}

export const emailPattern: Pattern = {
  value: emailRegex,
  message: 'Please enter a valid email address'
}

export const passwordPattern: Pattern = {
  value: passwordRegex,
  message:
    'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
}

export const usernamePattern: Pattern = {
  value: usernameRegex,
  message: 'Username must be at least 2 characters long'
}

// ------------------------------ //

export const titlePattern: Pattern = {
  value: titleRegex,
  message:
    'Title must be only letters and numbers, and at least 2 characters long'
}

export const descriptionPattern: Pattern = {
  value: descriptionRegex,
  message:
    'Description must be only letters and numbers, and at least 2 characters long'
}

export const maxApplicantsPattern: Pattern = {
  value: maxApplicantsRegex,
  message: 'Max applicants must be a number and max 10 digits long'
}

export const timeEventPattern: Pattern = {
  value: timeEventRegex,
  message: 'Time must be an in 12hr format: 10:30 AM'
}

export const typeEventPattern: Pattern = {
  value: typeEventRegex,
  message: 'Type must be either public or private'
}

export const countryPattern: Pattern = {
  value: countryRegex,
  message:
    'Country must be only letters and numbers, and at least 2 characters long'
}

export const statePattern: Pattern = {
  value: stateRegex,
  message:
    'State must be only letters and numbers, and at least 2 characters long'
}
export const cityPattern: Pattern = {
  value: cityRegex,
  message:
    'City must be only letters and numbers, and at least 2 characters long'
}
export const adressPattern: Pattern = {
  value: adressRegex,
  message:
    'Adress must be only letters and numbers, and at least 2 characters long'
}
export const zipCodePattern: Pattern = {
  value: zipCodeRegex,
  message:
    'zipCode must be a valid zip Code'
}
