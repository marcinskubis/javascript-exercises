const findTheOldest = function(persons) {
    return persons.reduce((oldestPerson, currentPerson) => {
        const oldestPersonsAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentPersonsAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestPersonsAge < currentPersonsAge ? currentPerson : oldestPerson;
    });
};
const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
