// ***************************** BASE SERVICE
// TODO: Add Base urls in the Node APP

// ***************************** SLUG
const UserSlug = '/user'
const DataSlug = '/data'

// ***************************** USER
const UserRoutes = {
  ALL: `${UserSlug}/all-users`,
  ME: `${UserSlug}/me`,
  REGISTER: `${UserSlug}/signup`,
  LOGIN: `${UserSlug}/login`
}

// ***************************** DATA
const DataRoutes = {
  ADD_DATA: `${DataSlug}/add-data`,
  ADD_REMINDER: `${DataSlug}/add-reminder`
}

// ***************************** EXPORT
export { UserRoutes, DataRoutes }
