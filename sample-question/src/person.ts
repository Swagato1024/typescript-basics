enum Gender {
  male,
  female,
}

type Person = {
  name: string;
  age: number;
  gender: Gender;
};

const display = (biswa: Person): void => {
  console.log(`name: ${biswa.name}`);
  console.log(`age: ${biswa.age}`);
  console.log(`gender: ${biswa.gender}`);
};

const isElegibleVoter = (person: Person) => person.age >= 18;

const biswa: Person = { name: "biswa", age: 21, gender: Gender.male };
const debu: Person = { name: "debu", age: 12, gender: Gender.male };
const utsab: Person = { name: "riya", age: 23, gender: Gender.female };

const selectElegibleVoter = (persons: Person[]) => {
  return persons.filter(isElegibleVoter);
};

display(biswa);

console.log(selectElegibleVoter([biswa, debu, utsab]));
