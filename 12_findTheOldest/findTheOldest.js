const findTheOldest = function(array) {
    let ages = [];
    array.forEach((person) => {
        let age = person.yearOfDeath-person.yearOfBirth;
        ages.push(age);
    });
    let oldestPerson = ages.indexOf(Math.max(...ages));
    return array[oldestPerson].name;

};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942
        },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(people.yearOfDeath);

// Do not edit below this line
module.exports = findTheOldest;