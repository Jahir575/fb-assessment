import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'

const routes = createBrowserRouter([
    { path: '/', element: <Dashboard /> }
])

export default routes