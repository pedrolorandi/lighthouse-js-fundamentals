const instructorWithLongestName = function(instructors) {
  let instructorName = "", instructorWithLongestName;

  instructors.forEach(function(instructor){
    if(instructor.name.length > instructorName.length){
      instructorName = instructor.name;
      instructorWithLongestName = instructor;
    }
  });

  return instructorWithLongestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));