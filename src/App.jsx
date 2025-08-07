import { RouterProvider } from 'react-router-dom'
//import DeclartiveRoutes from './routes/DeclartiveRoutes';
import { DataModeRoutes } from './routes/DataModeRoutes';
import UserProvider from './context/providers/UserProvider';
import WishlistProvider from './context/providers/WishlistProvider';

function App() {
  return (
    <>
      <UserProvider>
        <WishlistProvider>
          <RouterProvider router={DataModeRoutes} />
        </WishlistProvider>
      </UserProvider>
      {/* <DeclartiveRoutes /> */}
    </>
  )
}

export default App
