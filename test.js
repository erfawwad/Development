console.log("Hello, World! This is a test file for development purposes.");

const accountId = "user_12345";
let userStatus = "active";
let loginAttempts = 0;
let isLoggedIn = false;
let userName = "test_user";

console.table  ({
  accountId,
  userStatus,
    loginAttempts,
    isLoggedIn,
    userName
}); 

console.log(`Account ID: ${accountId}`);