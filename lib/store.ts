import { configureStore } from "@reduxjs/toolkit"
import coursesReducer from "./coursesSlice"
import enrolledCoursesReducer from "./enrolledCoursesSlice"

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    enrolledCourses: enrolledCoursesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

