import { Routes, Link, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import NewAuthor from "./views/NewAuthor";
import UpdateAuthor from "./views/UpdateAuthor";
import NoAuthor from "./views/NoAuthor";
import ViewAuthor from "./views/ViewAuthor";

function App() {
  return (
    <div className="App">
      <h1>Authors</h1>
      <p>
        <Link to="/dashboard">Dashboard</Link>{" "}
      </p>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<NewAuthor />} />
        <Route path="/error" element={<NoAuthor />} />
        <Route path="/:id" element={<ViewAuthor />} />
        <Route path="/edit/:id" element={<UpdateAuthor />} />
        {/* <Dashboard path="/" />
        <NewAuthor path="/new" />
        <NoAuthor path="/error" />
        <ViewAuthor path="/:id" />
        <UpdateAuthor path="/edit/:id" /> */}
      </Routes>
    </div>
  );
}

export default App;
