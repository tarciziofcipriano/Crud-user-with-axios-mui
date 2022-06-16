import UsersTable from "./components/UsersTable";
import { UsersProvider } from "./contexts/UsersContext";

function App() {
  return (
    <UsersProvider>
      <UsersTable />
    </UsersProvider>
  );
}

export default App;
