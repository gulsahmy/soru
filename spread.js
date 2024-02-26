function registerStudent() {
  const name = document.getElementById('studentName').value;
  const grade = parseInt(document.getElementById('grade').value, 10);
  if (name && grade) {
      createStudent(name, grade);
      console.log(`Öğrenci Kaydedildi: ${name}, Sınıf: ${grade}`);
  } else {
      console.log("Öğrenci adı ve sınıf bilgisi eksik!");
  }
}

// HTML'den girişleri alarak ders kaydeden fonksiyon
function registerCourse() {
  const name = document.getElementById('courseName').value;
  const teacher = document.getElementById('teacherName').value;
  if (name && teacher) {
      createCourse(name, teacher);
      console.log(`Ders Kaydedildi: ${name}, Öğretmen: ${teacher}`);
  } else {
      console.log("Ders adı ve öğretmen bilgisi eksik!");
  }
}

// Öğrenciyi derslere kaydeden fonksiyon
function enrollToCourse() {
  const studentName = document.getElementById('enrollStudentName').value;
  const courseName = document.getElementById('enrollCourseName').value;
  if (studentName && courseName) {
      enrollCourse(studentName, courseName);
      console.log(`${studentName}, ${courseName} dersine kaydedildi.`);
  } else {
      console.log("Öğrenci adı veya ders adı eksik!");
  }
}

// Tüm öğrencilerin notlarını gösteren fonksiyon
function displayAllGrades() {
  Object.keys(students).forEach(studentName => {
      displayGrades(studentName);
  });
}

// Tüm derslerin ortalamalarını gösteren fonksiyon
function displayAllAverages() {
  Object.keys(courses).forEach(courseName => {
      calculateAverage(courseName);
  });
}