let instructor = {
    firstName: "kelly",
    isInstructor: true,
    favoriteSongs: [1, 2, 3, 4]
}

console.log(Object.keys(instructor))
console.log(Object.entries(instructor))

console.log(instructor.hasOwnProperty('firstName'))