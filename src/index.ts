class Human {
  public name: string;
  private age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const bellsilver7 = new Human("bellsilver7", 32, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}.`;
};

console.log(sayHi(bellsilver7));

export {};
