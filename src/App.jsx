import { createHashRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: (
        <h1 className='text-4xl'>Bienvenidos a 
          <span className='text-blue-600'> MOLINASOLUTIONS</span>
        </h1>
      )
    },
    {
      path: '/fruppys',
      element: (
        <h1 className='text-4xl'>Bienvenidos a 
          <span className='text-orange-400'> Fruppys</span>
        </h1>
      )
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Routes>
        {router.routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </RouterProvider>
  )
}

export default App
