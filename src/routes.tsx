import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './components/pages/app/dashboard'
import { SignIn } from './components/pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/sign-in', element: <SignIn /> },
])
