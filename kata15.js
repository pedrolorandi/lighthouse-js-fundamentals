const organizeInstructors = function(instructors) {
  let courses = {}, coursesArr = [];

  instructors.forEach(function(instructor){
    instructor.course in courses ? coursesArr = courses[instructor.course] : coursesArr = [];
  
    coursesArr.push(instructor.name);
    courses[instructor.course] = coursesArr;
  });

  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));