using System;
using System.Collections.Generic;
using System.Linq;

internal class Student
{
    public string Name { get; set; }
    public int RollNumber { get; set; }
    public string Class { get; set; }

    public Student(string name, int rollNumber, string Class)
    {
        Name = name;
        RollNumber = rollNumber;
        this.Class = Class;
    }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student("Alice", 101, "Class A"),
            new Student("Bob", 102, "Class B"),
            new Student("Charlie", 103, "Class A"),
            new Student("David", 104, "Class C"),
            new Student("Emily", 105, "Class B")
        };

        var filteredStudents = students.Where(s => s.RollNumber > 102);
        Console.WriteLine("Filtered students by roll number:");
        foreach (var student in filteredStudents)
        {
            Console.WriteLine($"Name: {student.Name}, Roll Number: {student.RollNumber}, Class: {student.Class}");
        }
        Console.WriteLine();


        var orderedStudents = students.OrderBy(s => s.Name);
        Console.WriteLine("Ordered students by name:");
        foreach (var student in orderedStudents)
        {
            Console.WriteLine($"Name: {student.Name}, Roll Number: {student.RollNumber}, Class: {student.Class}");
        }
        Console.WriteLine();


        string targetClass = "Class A";
        var countStudentsInClass = students.Count(s => s.Class == targetClass);
        Console.WriteLine($"Number of students in {targetClass}: {countStudentsInClass}");


    }
}
