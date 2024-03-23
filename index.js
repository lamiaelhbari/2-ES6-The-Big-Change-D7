// 1- Fetch User Data :
async function fetchUserData() {
  try {
    const data = await fetch("https://dummyjson.com/users");
    const result = await data.json();
    // console.log("RESULT: ", result);
    return result.users;
  } catch (error) {
    console.log(" ERROR: ", error.message);
  }
}
// 2- Process Data :
function processUserData(result) {
  // Use destructuring to extract user properties within filter and map
  const filteredUsers = result.filter(({ gender }) => gender === "male");
  const formattedUsers = filteredUsers.map(
    ({ firstName, lastName, age }) =>
      `Name: ${firstName} ${lastName}, Age: ${age}`
  );
  console.log("Processed Data: ", formattedUsers);
  const totalofuser = summarizeAge(filteredUsers);
  console.log("Total Age of Active Users: ", totalofuser);
}

// 3- Summarize Data :
function summarizeAge(result) {
  const totalofuser = result.reduce((sum, user) => sum + user.age, 0);
  return totalofuser;
}

// 4- Display Results :
(async () => {
  try {
    const userData = await fetchUserData();
    processUserData(userData);
    summarizeAge(userData);
  } catch (error) {
    console.error("Error in main execution:", error);
  }
})();

/* 5- Example Output : 
Processed Users: 
- Name: Leanne Graham, Age: 30
- Name: Ervin Howell, Age: 28
...
Total Age of Active Users: 242  */
