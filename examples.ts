// check permission of a user via email
// const checkPermission = async (email: string) => {
//   const permitted = await permit.check(email, "create", "document");
//   console.log(permitted);
// }

// get users from Permit
// const getUsers = async () => {
//   const result = await permit.api.listUsers()
//   return result
// }

// get users from a Supabase table users
// const getUsers = async () => {
//   const { data, error } = await supabase
//     .from("users")
//     .select("*")

//   return data;
// }

// Assign a role to the new user
// const newRoleAssignment = await permit.api.assignRole({
//   role,
//   tenant: "tenant",
//   user: email
// });

