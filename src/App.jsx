import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { client } from "./components/UserInfo";
import UserDescription from "./components/UserDescription";
const listOfClients = client.map((cl) => {
  // console.log(cl);
  return (
    <div key={cl.id}>
      <User key={cl.id} client={cl} />
    </div>
  );
});
function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='client-container'>
          <Routes>
            <Route
              path='/UserDescription/:id'
              element={<UserDescription clientList={listOfClients} />}
            />
            <Route path='/' element={listOfClients} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
