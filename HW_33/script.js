const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

//     1. Создать строку из названий предметов написаных через запятую

function createStringName() {
  let stringNames = Object.keys(subjects).join(",");
  console.log(stringNames);
}
createStringName();

//     4. Создать массив из объектов предметов

let arrSubjectsObjects = Object.values(subjects);
console.log(arrSubjectsObjects);

//     2. Посчитать общее количнство студентов и учителей на всех предметах

function getAmountStudAndSub() {
  let sum = 0;
  arrSubjectsObjects.forEach(function (item) {
    sum += item.students + item.teachers;
  });
  console.log(sum);
}
getAmountStudAndSub();

// 3. Получить среднее количество студентов на всех пердмета

function getAverageNumberOfStudents() {
  let averageNumberOfStudents = 0;
  arrSubjectsObjects.forEach(function (item) {
    averageNumberOfStudents += item.students / arrSubjectsObjects.length;
  });
  console.log(averageNumberOfStudents);
}
getAverageNumberOfStudents();

//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

function getArraySubjects() {
  const subjectsArray = Object.entries(subjects).sort(
    (a, b) => b[1].teachers - a[1].teachers
  );
  let subjectsArrayString = [];
  subjectsArray.forEach((item) => subjectsArrayString.push(item[0]));
  console.log(subjectsArrayString);
}
getArraySubjects();
