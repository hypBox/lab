import { IBootcamp } from "../types"

export const bootcampData: IBootcamp = {
  id: "b1",
  title: "Python For Beginners",
  progress: 12.4,
  currentTask: {
    // this object must have value even if it's the strting point
    // user_id: "my_progress"
    moduleId: "m1",
    taskId: "t2",
  },
  milestones: [
    {
      id: "m1",
      title: "Overview",
      progress: 32.4,
      tasks: [
        {
          id: "t1",
          title: "Bootcamp Overview",
          type: "video",
          length: "5m 14s",
          progress: 32.4,
        },
        {
          id: "t2",
          title: "Course Outline",
          type: "video",
          length: "2m 22s",
          progress: null,
        },
        {
          id: "t3",
          title: "Project Overview",
          type: "video",
          length: "4m 32s",
          progress: null,
        },
      ],
    },
    {
      id: "m2",
      title: "Variables and Types",
      progress: null,
      tasks: [
        {
          id: "t4",
          title: "Variables",
          type: "video",
          length: "1m 22s",
          progress: null,
        },
        {
          id: "t5",
          title: "Types",
          type: "video",
          length: "1m 22s",
          progress: null,
        },
        {
          id: "t6",
          title: "Quizz 2",
          type: "quizz",
          length: "10m",
          progress: null,
        },
        { id: "t7", title: "Challenge 2", type: "challenge", progress: null },
      ],
    },
  ],
}
