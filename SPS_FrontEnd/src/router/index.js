import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SubjectsView from '@/views/Subjects/SubjectsView.vue'
import SubjectDetails from '@/views/Subjects/SubjectDetails.vue'
import ProjectsView from '@/views/Projects/ProjectsView.vue'
import ProjectDetails from '@/views/Projects/ProjectDetails.vue'
import TaskDetails from '@/components/Tasks/TaskDetails.vue'
import SettingsView from '@/views/Settings/SettingsView.vue'
import MemberView from '@/views/Members/MemberView.vue'
import MemberDetails from '@/views/Members/MemberDetails.vue'
import TodaysWorkView from '@/views/TodaysWork/TodaysWorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignInView,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView,
    },
    {
      path: '/subjects',
      name: 'Subjects',
      component: SubjectsView,
    },
    {
      path: '/subjects_details',
      name: 'Subjects_Details',
      component: SubjectDetails,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
    },
    {
      path: '/projects_details',
      name: 'Projects_Details',
      component: ProjectDetails,
    },
    {
      path: '/task_details',
      name: 'Task_Details',
      component: TaskDetails,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView,
    },
    {
      path: '/members',
      name: 'MemberView',
      component: MemberView,
    },
    {
      path: '/todayswork',
      name: 'TodaysWork',
      component: TodaysWorkView,
    },
    {
      path: '/members/:id',
      name: 'MemberDetails',
      component: MemberDetails,
    },
  ],
})

export default router
