var users = [
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
// 1. Создать строку из имен пользователей через запятую
function getStringNames(array) {
    var stringNames = [];
    array.forEach(function (item) {
        stringNames.push(item.name);
    });
    console.log(stringNames);
    return stringNames;
}
getStringNames(users);
// 2. Посчитать общее количество машин у пользователей
function countNumOfCars(array) {
    var numOfCars = 0;
    array.forEach(function (item) {
        if (item.cars !== undefined) {
            numOfCars += item.cars.length;
        }
    });
    console.log(numOfCars);
}
countNumOfCars(users);
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function filterArrayEducation(array) {
    var arrFilterEducation = array.filter(function (_a) {
        var hasEducation = _a.hasEducation;
        return hasEducation;
    });
    console.log(arrFilterEducation);
}
filterArrayEducation(users);
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function filterArrayAnimals(array) {
    var arrFilterAnimals = array.filter(function (_a) {
        var animals = _a.animals;
        return animals;
    });
    console.log(arrFilterAnimals);
}
filterArrayAnimals(users);
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
function getStringNameCars(array) {
    var nameCars = [];
    array.forEach(function (item) {
        if (item.cars) {
            item.cars.forEach(function (el) { return nameCars.push(el); });
        }
    });
    console.log(nameCars);
}
getStringNameCars(users);
