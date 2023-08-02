const users = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];
type MyUsers = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
};
// 1. Создать строку из имен пользователей через запятую

function getStringNames<T extends MyUsers>(array: T[]): string[] {
  let stringNames: string[] = [];
  array.forEach((item: T) => {
    stringNames.push(item.name);
  });
  console.log(stringNames);
  return stringNames;
}
getStringNames(users);
// 2. Посчитать общее количество машин у пользователей
function countNumOfCars<T extends MyUsers>(array: T[]) {
  let numOfCars: number = 0;
  array.forEach((item: T) => {
    if (item.cars !== undefined) {
      numOfCars += item.cars.length;
    }
  });
  console.log(numOfCars);
}
countNumOfCars(users);

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function filterArrayEducation<T extends MyUsers>(array: T[]){
   let arrFilterEducation = array.filter((item: T) => {
      return item.hasEducation === true;
   })
   console.log(arrFilterEducation)
}
filterArrayEducation(users)

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

function filterArrayAnimals<T extends MyUsers>(array: T[]) {
   let arrFilterAnimals=array.filter((item: T) => {
     return item.animals
     
   })
   console.log(arrFilterAnimals)
      
}
filterArrayAnimals(users)

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

function getStringNameCars<T extends MyUsers>(array: T[]) {
   let nameCars: string[] = [];
   array.forEach((item: T) => {
      if (item.cars !== undefined) {
         item.cars.forEach((el)=> nameCars.push(el))
      }
   })
   console.log(nameCars)
}
getStringNameCars(users)


