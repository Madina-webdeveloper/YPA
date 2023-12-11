import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { Membership } from "./pages/Membership/Membership";
import { News } from "./pages/News/News";
import { Policy } from "./pages/Policy/Policy";
import { Contact } from "./pages/Contact/Contact";
import { Members } from "./pages/Members/Members";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/news" element={<News />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
