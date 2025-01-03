const findTheOldest = function(people) {
    let oldest = people[0];
    const currentYear = new Date().getFullYear();

    for (const person of people) {

        const personDeathYear = person.yearOfDeath || currentYear;
        const personAge = personDeathYear - person.yearOfBirth;

        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        if (personAge > oldestAge) {
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
