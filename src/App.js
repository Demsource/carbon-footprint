import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from "./AppContext";
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import Dashboard from "./routes/dashboard";
import Leaderboard from "./routes/leaderboard";
import Tips from "./routes/tips";
import YourProgress from "./routes/your-progress";
// import Donations from "./routes/donations";
// import { PrifinaProvider, PrifinaContext } from "@prifina/hooks-v2";

const router = createBrowserRouter(
  [
    {
      path: "/carbon-footprint",
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
          path: "/carbon-footprint",
          element: <Dashboard />,
        },
        {
          path: "/carbon-footprint/leaderboard",
          element: <Leaderboard />,
        },
        {
          path: "/carbon-footprint/tips",
          element: <Tips />,
        },
        {
          path: "/carbon-footprint/your-progress",
          element: <YourProgress />,
        },
        // {
        //   path: "/donations",
        //   element: <Donations />,
        // },
      ],
    },
  ],
  {
    basename: "/carbon-footprint",
  }
);

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
