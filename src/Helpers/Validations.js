export const LoginValidations = (email, password) => {
  if (!email) {
    return 'Email is Required!'
  }

  if (!password) {
    return 'Password is Required!'
  }
}

export const AddValueValidations = (dataEntry, logbookEntry) => {
  if (!dataEntry) {
    return 'Entry Value is Required!'
  }

  if (!logbookEntry) {
    return 'Entry Description is Required!'
  }
}

export const RegisterValidations = (
  firstName,
  lastName,
  email,
  password,
  address,
  town,
  postcode
) => {
  if (!firstName) {
    return 'First Name is Require!'
  }
  if (!lastName) {
    return 'Last Name is Required!'
  }
  if (!email) {
    return 'Email is Required!'
  }

  if (!password) {
    return 'Password is Required!'
  }

  if (password && password.length < 6) {
    return 'Password Length Must be greater than 6 characters'
  }
  if (!address) {
    return 'Address is Required!'
  }
  if (!town) {
    return 'Town Name is Required!'
  }
  if (!postcode) {
    return 'Postal Code is Required!'
  }
}
