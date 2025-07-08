import { RouterProvider } from 'react-router-dom'
import DeclartiveRoutes from './routes/DeclartiveRoutes';
import { DataModeRoutes } from './routes/DataModeRoutes';

function App() {
  return (
    <>
      <RouterProvider router={DataModeRoutes} />
      {/* <DeclartiveRoutes /> */}
    </>
  )
}

export default App
