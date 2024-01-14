import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import EventDetail from "./pages/EventDetail";
import NewEventPage from "./pages/NewEventPage";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";


const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>,
        children: [
  {index: true, element: <HomePage/>},
          {
            path: 'events',
          element: <RootLayout/>,
          children:[
            {index: true, element: <EventPage/>},
            {path: '/:eventId', element: <EventDetail/>},
            {path: '/new', element: <NewEventPage/>},
            {path: '/:eventId/edit', element: <EditEvent/>},
          ],
          },
],
  },

]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
