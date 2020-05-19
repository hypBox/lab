import { IBootcamp } from "../types"

export const bootcampData: IBootcamp = {
  id: "b1",
  title: "Python For Beginners",
  progress: 12.4,
  currentTask: {
    // this object must have value even if it's the strting point
    // user_id: "my_progress"
    milestoneId: "m1",
    taskId: "t1",
  },
  milestones: [
    {
      id: "m1",
      title: "Overview",
      progress: 100,
      tasks: [
        {
          id: "t1",
          title: "Bootcamp Overview",
          type: "video",
          url: "https://www.youtube.com/watch?v=gAprO6lGizM",
          length: "1m 24s",
          progress: 100,
        },
        {
          id: "t2",
          title: "Course Outline",
          type: "video",
          length: "2m 22s",
          progress: 100,
        },
        {
          id: "t3",
          title: "Project Overview",
          type: "video",
          length: "4m 32s",
          progress: 100,
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
        {
          id: "t7",
          title: "More Examples",
          type: "moreexamples",
          length: "5m 13s",
          progress: null,
        },
        { id: "t8", title: "Challenge 2", type: "challenge", progress: null },
      ],
    },
  ],
}
