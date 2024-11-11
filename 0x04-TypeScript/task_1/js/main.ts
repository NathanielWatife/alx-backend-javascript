// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any; // Allows additional properties with any name and any type
  }
  
  // Create an instance of Teacher with extra property "contract"
  const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false, // Additional property
  };
  
  console.log(teacher3);
  