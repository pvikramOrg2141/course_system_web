"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AppDispatch, RootState } from "@/lib/store"
import { fetchCourses } from "@/lib/coursesSlice"

export default function CourseList() {
  const dispatch = useDispatch<AppDispatch>()
  const courses = useSelector((state: RootState) => state.courses.courses)
  const status = useSelector((state: RootState) => state.courses.status)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses())
    }
  }, [status, dispatch])

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (status === "loading") {
    return <div>Loading courses...</div>
  }

  if (status === "failed") {
    return <div>Error loading courses. Please try again later.</div>
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Search courses or instructors"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <Link href={`/course/${course.id}`} key={course.id}>
            <Card>
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Instructor: {course.instructor}</p>
                <p>Status: {course.enrollmentStatus}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

