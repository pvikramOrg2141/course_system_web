"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/lib/redux/store"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CourseDetails() {
  const { id } = useParams()
  const course = useSelector((state: RootState) => state.courses.courses.find((c) => c.id === id))

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p>
          <strong>Description:</strong> {course.description}
        </p>
        <p>
          <strong>Enrollment Status:</strong> {course.enrollmentStatus}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Schedule:</strong> {course.schedule}
        </p>
        <p>
          <strong>Location:</strong> {course.location}
        </p>
        <p>
          <strong>Prerequisites:</strong> {course.prerequisites.join(", ")}
        </p>

        <Accordion type="single" collapsible>
          <AccordionItem value="syllabus">
            <AccordionTrigger>Syllabus</AccordionTrigger>
            <AccordionContent>
              {course.syllabus.map((item, index) => (
                <div key={index}>
                  <h3>
                    Week {item.week}: {item.topic}
                  </h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

