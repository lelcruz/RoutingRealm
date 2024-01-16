import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage, {loader as eventsLoader} from "./pages/EventPage";
import EventDetail, {loader as eventDetailLoader} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEventPage";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/RootLayout";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true,
            element: <EventPage />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children:[
              { index: true,
                element: <EventDetail />,
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },

        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
