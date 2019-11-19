function mostMoney(students) {
  const monies = students.map(student => ({
    name: student.name,
    money: student.fives * 5 + student.tens * 10 + student.twenties * 20
  }));
  if (monies.length > 1 && monies.every(m => m.money === monies[0].money)) {
    return "all";
  }
  return monies.reduce(
    (max, m) => {
      if (m.money > max.total) {
        return {
          name: m.name,
          total: m.money
        };
      }
      return max;
    },
    { name: "", total: 0 }
  ).name;
}

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

console.log(mostMoney([cam, geoff, david]));
