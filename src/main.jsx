-import { createBrowserRouter, RouterProvider } from 'react-router-dom'
+import { createHashRouter, RouterProvider } from 'react-router-dom'
...
-const router = createBrowserRouter([
+const router = createHashRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'catalog', element: <Catalog /> },
  ]},
])