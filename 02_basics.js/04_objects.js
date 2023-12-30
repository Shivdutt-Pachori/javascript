//const tinderuser = new Object(); // singleton object
const tinderUser = {// non - singleton object
    id: "123abc",
    name: "Spiderman",
    isLoggedIn: false
} 

// tinderUser.id = "123abc"; // another way to add values to object
// tinderUser.name = "Shaktiman";
// tinderUser.isLoggedIn = false;

//console.log(tinderUser);


const regularUser = {
    email: "some@gamil.com",
    fullName: {
        userFullName: {
            firstName: "spider",
            lastname: "man"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 3: "a", 4: "b"};

//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1,...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        name: "fisrt"
    },
    {
        id: 2,
        name: "second"
    },
    {
        id: 3,
        name: "third"
    }
]

console.log(users[0].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//OBJECT DESTRUCTURING
const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor);
//another way to do same
const {courseInstructor} = course
console.log(courseInstructor);