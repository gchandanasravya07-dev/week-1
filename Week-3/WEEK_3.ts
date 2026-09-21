class Student {

    // Public Property
    public name: string;

    // Private Property
    private age: number;

    // Protected Property
    protected course: string;

    // Readonly Property
    readonly country: string = "India";

    // Static Property
    static college: string = "Sri Vishnu Engineering College";

    // Constructor
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Method
    public displayDetails(): void {
        console.log("----- Student Details -----");
        console.log("Name     :", this.name);
        console.log("Age      :", this.age);
        console.log("Course   :", this.course);
        console.log("Country  :", this.country);
        console.log("College  :", Student.college);
    }
}

// Inheritance
class Result extends Student {

    public marks: number;

    constructor(name: string, age: number, course: string, marks: number) {
        super(name, age, course);
        this.marks = marks;
    }

    public displayResult(): void {
        console.log("\n----- Student Result -----");
        console.log("Student Name :", this.name);
        console.log("Course       :", this.course);
        console.log("Marks        :", this.marks);
    }
}

// Object Creation
let s1 = new Result("Chandana", 19, "AIML", 95);

// Calling Methods
s1.displayDetails();
s1.displayResult();
