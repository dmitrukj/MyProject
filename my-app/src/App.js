import React from "react";
import "./App.css";
import "./ReduxExample";
import { createApplicationStore } from "./Redux/ReduxStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/indexHomePage";
import { useMemo } from "react";
import RepositoriesList from "./components/Profile/Repository/RepositoryList/RepositoryList";

export const repositoriesData = {
  repos: [
    {
      id: "id 45715",
      name: "Project",
      author: "@anna46",
      lastCommitDate: "07.03.2022",
      startAmount: 7,
    },
  ],

  repos2: [
    {
      id: "id 87955",
      name: "MyShop",
      author: "@svetapusik",
      lastCommitDate: "01.03.2021",
      startAmount: 10,
    },
  ],

  repos3: [
    {
      id: "id 80085",
      name: "Social-network",
      author: "@dimon",
      lastCommitDate: "12.03.2020",
      startAmount: 4,
    },
  ],
  repos4: [
    {
      id: "id 21085",
      name: "Green",
      author: "@vulf",
      lastCommitDate: "12.08.2020",
      startAmount: 8,
    },
  ],
  repos5: [
    {
      id: "id 145085",
      name: "Network",
      author: "@clki",
      lastCommitDate: "10.07.2020",
      startAmount: 7,
    },
  ],
};
function App() {
  const store = useMemo(() => createApplicationStore(), []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <HomePage />
          <RepositoriesList repositories={repositoriesData} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
