const { Guardian, Student, Teacher } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Subject } = require("./university");

/**
 * Guardian ID: 1
 */
const guardian = new Guardian(1, "Kawsar", "Engineer", 75000);
guardian.blood = "O+";
guardian.contact = new Contact({
  id: 1,
  email: "kawsar@test.com",
  phone: "0165456456",
});
guardian.contact.address = new Address({
  id: 1,
  roadNo: 19,
  city: "Dhaka",
  state: "Dhaka",
  country: "Bangladesh",
  postalCode: 1216,
});

/**
 * Student ID: 1
 */
const student = new Student(1, "Nafi", 16050, guardian);
student.blood = "A+";
student.contact = new Contact({
  id: 2,
  email: "nafi@test.com",
  phone: "0165456454",
  alternativePhone: student.guardian.contact.phone,
  address: student.guardian.contact.address,
});

/**
 * Department ID: 1
 */
const department = new Department({ id: 1, name: "SWE" });
student.department = department;
department.subjects = [
  new Subject(1, "Computer Fundamentals", 4),
  new Subject(2, "Introduction to Software Engineering", 3),
  new Subject(3, "Software Testing", 4),
];
/**
 * Total Credits
 */
const totalCredit = student.department.subjects.reduce((a, b) => {
  return a + b.credit;
}, 0);

/**
 * Teacher ID: 1
 */
const dean = new Teacher(1, "Sumaiya Nuri", department.subjects[0]);
dean.blood = "B+";
dean.department = department;
dean.salary = 100000;
dean.employeeID = "EMP1001";
dean.contact = new Contact({
  id: 3,
  email: "sumaiya@test.com",
  phone: "01246464664",
  address: new Address({
    id: 3,
    roadNo: 17,
    city: "Sirajganaj",
    state: "Rajshahi",
    country: "Bangladesh",
    postalCode: 1216,
  }),
});
const teacher1 = new Teacher(2, "Khan", department.subjects[1]);
teacher1.department = department;
teacher1.blood = "O+";
teacher1.salary = 40000;
teacher1.employeeID = "EM1002";
teacher1.contact = new Contact({
  id: 4,
  email: "khan@test.com",
  phone: "0126464664",
  address: new Address({
    id: 4,
    roadNo: 16,
    city: "Sirajganaj",
    state: "Rajshahi",
    country: "Bangladesh",
    postalCode: 1216,
  }),
});
const teacher2 = new Teacher(2, "Nurain", department.subjects[2]);
teacher2.department = department;
teacher2.blood = "A-";
teacher2.salary = 50000;
teacher2.employeeID = "EM1003";
teacher2.contact = new Contact({
  id: 5,
  email: "khan@test.com",
  phone: "0126464664",
  address: new Address({
    id: 5,
    roadNo: 15,
    city: "Sirajganaj",
    state: "Rajshahi",
    country: "Bangladesh",
    postalCode: 1216,
  }),
});
department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

student.department.teachers.forEach((teacher, index) => {
  console.log(
    `${index + 1}. Teacher Name: ${teacher.name}, Teacher Subject: ${
      teacher.subject.name
    }`
  );
});
guardian.addChild(student);
const totalSalary = guardian.children[0].department.teachers.reduce(
  (acc, curr) => {
    acc += curr.salary;
    return acc;
  },
  0
);
console.log(totalSalary);
let count = 0;
if (student.blood === "O+") count++;
if (student.guardian.blood === "O+") count++;
student.department.teachers.forEach((teacher) => {
  if (teacher.blood === "O+") count++;
});
