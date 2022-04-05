const name = "bellsilver7",
  age = 32,
  gender = "male";

const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}.`);
};

sayHi(name, age, gender);

// sayHi(name, age); => 이렇게 사용하면 error

// 선택적으로 사용하려면 ? 를 붙여준다.
const sayHi2 = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}.`);
};

sayHi2(name, age);

export {};
