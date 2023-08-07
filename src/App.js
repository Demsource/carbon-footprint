import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { createHashRouter, RouterProvider } from "react-router-dom";
import AppProvider from "./AppContext";
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import Dashboard from "./routes/dashboard";
import Leaderboard from "./routes/leaderboard";
import Tips from "./routes/tips";
import YourProgress from "./routes/your-progress";
// import Donations from "./routes/donations";
// import { PrifinaProvider, PrifinaContext } from "@prifina/hooks-v2";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <Root />
      </AppProvider>
    ),
    errorElement: (
      <Root>
        <ErrorPage />
      </Root>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/tips",
        element: <Tips />,
      },
      {
        path: "/your-progress",
        element: <YourProgress />,
      },
      // {
      //   path: "/donations",
      //   element: <Donations />,
      // },
    ],
  },
]);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
