import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { EnrolledCourse } from "@/types/course"

interface EnrolledCoursesState {
  courses: EnrolledCourse[]
}

const initialState: EnrolledCoursesState = {
  courses: [],
}

const enrolledCoursesSlice = createSlice({
  name: "enrolledCourses",
  initialState,
  reducers: {
    setEnrolledCourses: (state, action: PayloadAction<EnrolledCourse[]>) => {
      state.courses = action.payload
    },
    markCourseAsCompleted: (state, action: PayloadAction<string>) => {
      const course = state.courses.find((c) => c.id === action.payload)
      if (course) {
        course.completed = true
      }
    },
  },
})

export const { setEnrolledCourses, markCourseAsCompleted } = enrolledCoursesSlice.actions
export default enrolledCoursesSlice.reducer

