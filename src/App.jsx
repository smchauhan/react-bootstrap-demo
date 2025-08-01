import { RouterProvider } from 'react-router-dom'
//import DeclartiveRoutes from './routes/DeclartiveRoutes';
import { DataModeRoutes } from './routes/DataModeRoutes';
import UserProvider from './context/providers/UserProvider';

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={DataModeRoutes} />
      </UserProvider>
      {/* <DeclartiveRoutes /> */}
    </>
  )
}

export default App
