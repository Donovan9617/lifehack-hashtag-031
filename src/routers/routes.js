import React from "react"

const PublicRoutes = [
  {
    path: '/login',
    exact: true,
    component: React.lazy(() => import("../pages/loginpage/LoginPage"))
  },
];

const PrivateRoutes = [
  {
    path: '/chat',
    exact: true,
    component: React.lazy(() => import("../pages/chatpage/ChatPage")),
  },
  {
    path: '/teacher/dashboard',
    exact: true,
    component: React.lazy(() => import("../pages/homepage/TeacherHomePage")),
  },
  {
    path: '/student/dashboard',
    exact: true,
    component: React.lazy(() => import("../pages/homepage/StudentHomePage")),
  },
  {
    path: '/teacher/about',
    exact: true,
    component: React.lazy(() => import("../pages/aboutpage/AboutPage")),
  },
  {
    path: '/student/about',
    exact: true,
    component: React.lazy(() => import("../pages/aboutpage/AboutPage")),
  },
  {
    path: '/lessondata',
    exact: true,
    component: React.lazy(() => import("../pages/lessondatapage/LessonDataPage")),
  },
  {
    path: '/lessondata/livedata',
    exact: true,
    component: React.lazy(() => import("../pages/lessondatapage/LiveDataPage")),
  },
  {
    path: '/lessondata/reviewdata',
    exact: true,
    component: React.lazy(() => import("../pages/lessondatapage/ReviewDataPage")),
  },
];

export { PublicRoutes, PrivateRoutes };