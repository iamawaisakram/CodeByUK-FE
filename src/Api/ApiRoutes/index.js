// ***************************** BASE SERVICE
// TODO: Add Base urls in the Node APP for Micro-Application

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
  GET_DATA_ENTRIES: `${DataSlug}/get-data-entries`,
  ADD_REMINDER: `${DataSlug}/add-reminder`,
  GET_REMINDER_ENTRIES: `${DataSlug}/get-reminder-entries`,
  GET_TEST_RESULTS: `${DataSlug}/get-test-results`
}

// ***************************** EXPORT
export { UserRoutes, DataRoutes }
