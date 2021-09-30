// Lodash

const _ = require('lodash');

// Only change code below this line

// users nested array with four objects starts here

var users  = [
{
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male"
},
{
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female"
},
{
    id: 3,
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male"
},
{
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female"
}
];

// users nested array with four objects ends here

// getUsers function - list of users starts here

function getUsers() {
    
const { id, firstName, lastName, age, gender} = users;
var output = "";

for (var i = 0; i < users.length; i++) {
    if (i === users.length - 1) {
        output += users[i].id + " " + users[i].firstName + " " + users[i].lastName + " " + "is" + " " + users[i].age + "," + " " + users[i].gender;
    } else {
        output += users[i].id + " " + users[i].firstName + " " + users[i].lastName + " " + "is" + " " + users[i].age + "," + " " + users[i].gender + "\n";}
    }
    return output;
}
    
// getUsers function - list of users ends here

// findUserById(id) function starts here

function findUserById(id) {
    try {
        var user = _.find(users, { id });
        var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        return iFindUser;
    } catch (error) {
        console.log(error.message);
        return `Cannot read property 'id'`;
    }
}

// findUserById(id) function ends here

// Only change code below this line

getUsers();
console.log(findUserById(4));

module.exports = findUserById;