import type { Course } from "@/types/course"
import { NextResponse } from "next/server"

const courses: Course[] = [
  {
    id: "1",
    name: "Introduction to React",
    instructor: "John Doe",
    description: "Learn the basics of React and build your first application.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/react-thumbnail.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7-9 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "HTML and CSS"],
    syllabus: [
      { week: 1, topic: "Introduction to React", content: "Overview of React, Virtual DOM, and JSX" },
      { week: 2, topic: "Components and Props", content: "Creating and using React components" },
      
    ],
  },
  {
    id: "2",
    name: "Advanced React Concepts",
    instructor: "Jane Smith",
    description: "Deep dive into advanced React topics like hooks, context, and performance optimization.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/react-advanced-thumbnail.jpg",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 6-8 PM",
    location: "Online",
    prerequisites: ["Introduction to React"],
    syllabus: [
      { week: 1, topic: "Hooks", content: "Understanding and using useState, useEffect, and custom hooks" },
      { week: 2, topic: "Context API", content: "Managing global state with Context API" },
      
    ],
  },
  {
    id: "3",
    name: "Node.js and Express",
    instructor: "David Lee",
    description: "Build server-side applications with Node.js and Express framework.",
    enrollmentStatus: "Closed",
    thumbnail: "https://example.com/nodejs-thumbnail.jpg",
    duration: "10 weeks",
    schedule: "Wednesdays and Fridays, 8-10 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge"],
    syllabus: [
      { week: 1, topic: "Introduction to Node.js", content: "Setting up Node.js environment" },
      { week: 2, topic: "Express.js Basics", content: "Creating routes and handling requests" },
      
    ],
  },
  {
    id: "4",
    name: "Python for Beginners",
    instructor: "Sarah Jones",
    description: "Learn the fundamentals of Python programming language.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/python-thumbnail.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6-8 PM",
    location: "Online",
    prerequisites: [],
    syllabus: [
      { week: 1, topic: "Introduction to Python", content: "Setting up Python environment" },
      { week: 2, topic: "Data Types and Variables", content: "Working with different data types" },
      
    ],
  },
  {
    id: "5",
    name: "Data Structures and Algorithms",
    instructor: "Michael Brown",
    description: "Learn essential data structures and algorithms in Python.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/data-structures-thumbnail.jpg",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 7-9 PM",
    location: "Online",
    prerequisites: ["Python for Beginners"],
    syllabus: [
      { week: 1, topic: "Arrays and Linked Lists", content: "Implementing basic data structures" },
      { week: 2, topic: "Stacks and Queues", content: "Understanding and using stacks and queues" },
      
    ],
  },
  {
    id: "6",
    name: "Web Development with Django",
    instructor: "Emily Davis",
    description: "Build web applications using the Django framework.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/django-thumbnail.jpg",
    duration: "10 weeks",
    schedule: "Wednesdays and Fridays, 6-8 PM",
    location: "Online",
    prerequisites: ["Python for Beginners"],
    syllabus: [
        { week: 1, topic: "Introduction to Django", content: "Setting up Django project" },
        { week: 2, topic: "Models and Databases", content: "Defining models and working with databases" },
        
      ],
  },
    {
    id: "7",
    name: "Machine Learning with Python",
    instructor: "Chris Wilson",
    description: "Introduction to Machine Learning with Python.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/ml-thumbnail.jpg",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 7-9 PM",
    location: "Online",
    prerequisites: ["Python for Beginners", "Data Structures and Algorithms"],
    syllabus: [
        { week: 1, topic: "Introduction to ML", content: "Basic concepts of ML" },
        { week: 2, topic: "Supervised Learning", content: "Linear Regression" },
        
      ],
  },
  {
    id: "8",
    name: "JavaScript Fundamentals",
    instructor: "Ashley Garcia",
    description: "Learn the core concepts of JavaScript.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/js-thumbnail.jpg",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6-8 PM",
    location: "Online",
    prerequisites: [],
    syllabus: [
        { week: 1, topic: "Variables and Data Types", content: "Working with variables" },
        { week: 2, topic: "Operators and Expressions", content: "Using operators" },
        
      ],
  },
    {
    id: "9",
    name: "Front-End Web Development",
    instructor: "Kevin Rodriguez",
    description: "Learn HTML, CSS, and JavaScript for building websites.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/frontend-thumbnail.jpg",
    duration: "10 weeks",
    schedule: "Wednesdays and Fridays, 8-10 PM",
    location: "Online",
    prerequisites: ["JavaScript Fundamentals"],
    syllabus: [
        { week: 1, topic: "HTML Basics", content: "HTML tags" },
        { week: 2, topic: "CSS Styling", content: "Applying styles" },
        
      ],
  },
    {
    id: "10",
    name: "UX/UI Design",
    instructor: "Jessica Martinez",
    description: "Learn the principles of user experience and user interface design.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/uxui-thumbnail.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6-8 PM",
    location: "Online",
    prerequisites: [],
    syllabus: [
        { week: 1, topic: "User Research", content: "Understanding users" },
        { week: 2, topic: "Wireframing and Prototyping", content: "Creating prototypes" },
        
      ],
  },
    {
    id: "11",
    name: "SQL Databases",
    instructor: "William Anderson",
    description: "Learn SQL for managing and querying databases.",
    enrollmentStatus: "Open",
    thumbnail: "https://example.com/sql-thumbnail.jpg",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 7-9 PM",
    location: "Online",
    prerequisites: [],
    syllabus: [
        { week: 1, topic: "Database Basics", content: "Introduction to databases" },
        { week: 2, topic: "SQL Queries", content: "Writing SQL queries" },
        
      ],
  },
  
]

export async function GET() {
  return NextResponse.json(courses)
}

