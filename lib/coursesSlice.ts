import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import type { Course } from "@/types/course"

interface CoursesState {
  courses: Course[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: CoursesState = {
  courses: [],
  status: "idle",
  error: null,
}

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  const response = await fetch("/api/courses")
  return (await response.json()) as Course[]
})

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.status = "succeeded"
        state.courses = action.payload
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch courses"
      })
  },
})

export default coursesSlice.reducer

