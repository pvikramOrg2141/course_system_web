export interface Course {
  id: string
  name: string
  instructor: string
  description: string
  enrollmentStatus: "Open" | "Closed" | "In Progress"
  thumbnail: string
  duration: string
  schedule: string
  location: string
  prerequisites: string[]
  syllabus: { week: number; topic: string; content: string }[]
}

export interface EnrolledCourse {
  id: string
  name: string
  instructor: string
  thumbnail: string
  dueDate: string
  progress: number
  completed: boolean
  description?: string  // Optional property
  enrollmentStatus?: string  // Optional property
  duration?: string  // Optional property
  schedule?: string  // Optional property
  // Include any other properties as needed
}


