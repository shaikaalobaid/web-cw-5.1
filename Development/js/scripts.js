// السؤال الأول
// 1 
const name = shaika;
    

// 2
let age = 15;
    

// 3 and 4
console.log("أنا"+name+""+"و عمري "+age)


// 5 and 6
let five_times_age=5*age;
console.log(five_times_age)

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobby = ["السباحة", "الكتابة","القراءة"]


// 2
hobby.push("15")
hobby[3] = 15
console.log(hobby)
console.log(hobby.length)


// 3
hobby.pop()
console.log(hobby)


// 4
let student = {
    track:"مسار الويب";
    language:"JavaScript";
}


// 5
student["TAs"] = ["نانسي"+"موضي"+"حسين"+"رهف"]
console.log(student)


// 6
console.log(student["track"])
console.log(student.track)


// 7
console.log(student["TAs"][0])
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
student["bouns"] = function() {console.log}("مرحبا")
console.log(student)


// 2
student["bouns"]()

// console results => console.png
