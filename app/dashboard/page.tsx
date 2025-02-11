"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AppDispatch, RootState } from "@/lib/store"
import { markCourseAsCompleted, setEnrolledCourses } from "@/lib/enrolledCoursesSlice"

// Mock enrolled courses data
const mockEnrolledCourses = [
  {
    id: "1",
    name: "Introduction to React",
    instructor: "John Doe",
    thumbnail: "https://example.com/react-thumbnail.jpg",
    dueDate: "2023-12-31",
    progress: 60,
    completed: false,
  },
  {
    id: "2",
    name: "Advanced JavaScript",
    instructor: "Jane Smith",
    thumbnail: "https://example.com/js-thumbnail.jpg",
    dueDate: "2024-02-28",
    progress: 45,
    completed: false,
  },
  {
    id: "3",
    name: "CSS Flexbox and Grid",
    instructor: "Alice Brown",
    thumbnail: "https://example.com/css-thumbnail.jpg",
    dueDate: "2024-01-15",
    progress: 80,
    completed: false,
  },
  {
    id: "4",
    name: "React Native for Beginners",
    instructor: "Michael Johnson",
    thumbnail: "https://example.com/react-native-thumbnail.jpg",
    dueDate: "2024-03-10",
    progress: 25,
    completed: false,
  },
  {
    id: "5",
    name: "Node.js and Express.js",
    instructor: "Chris Williams",
    thumbnail: "https://example.com/node-thumbnail.jpg",
    dueDate: "2024-05-05",
    progress: 50,
    completed: false,
  },
  {
    id: "6",
    name: "Introduction to Python",
    instructor: "Sara Davis",
    thumbnail: "https://example.com/python-thumbnail.jpg",
    dueDate: "2024-04-20",
    progress: 70,
    completed: false,
  },
  {
    id: "7",
    name: "Machine Learning Basics",
    instructor: "David Lee",
    thumbnail: "https://example.com/ml-thumbnail.jpg",
    dueDate: "2024-06-15",
    progress: 10,
    completed: false,
  },
  {
    id: "8",
    name: "Web Development with Django",
    instructor: "Emma Harris",
    thumbnail: "https://example.com/django-thumbnail.jpg",
    dueDate: "2024-07-30",
    progress: 35,
    completed: false,
  },
  {
    id: "9",
    name: "UI/UX Design Fundamentals",
    instructor: "Olivia Martinez",
    thumbnail: "https://example.com/ui-ux-thumbnail.jpg",
    dueDate: "2024-03-25",
    progress: 90,
    completed: false,
  },
  {
    id: "10",
    name: "Database Management with MongoDB",
    instructor: "Ethan Clark",
    thumbnail: "https://example.com/mongodb-thumbnail.jpg",
    dueDate: "2024-06-10",
    progress: 40,
    completed: false,
  }
];


export default function StudentDashboard() {
  const dispatch = useDispatch<AppDispatch>()
  const enrolledCourses = useSelector((state: RootState) => state.enrolledCourses.courses)

  useEffect(() => {
    dispatch(setEnrolledCourses(mockEnrolledCourses))
  }, [dispatch])

  const handleMarkAsCompleted = (courseId: string) => {
    dispatch(markCourseAsCompleted(courseId))
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <Progress value={course.progress} className="my-2" />
              <p>Progress: {course.progress}%</p>
              {!course.completed && <Button onClick={() => handleMarkAsCompleted(course.id)}>Mark as Completed</Button>}
              {course.completed && <p>Completed!</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

