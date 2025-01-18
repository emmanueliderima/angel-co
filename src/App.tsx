import Home from "./pages/Home"
import Upcoming from "./pages/Upcoming"
import Previous from "./pages/Previous"
import Recordings from "./pages/Recordings"
import Personal from "./pages/Personal"
import { Routes, Route } from "react-router-dom"
import Meeting from "./pages/Meeting"
import HomeLayout from "./layouts/HomeLayout"
import MeetingLayout from "./layouts/MeetingLayout"

const App = () => {

  return (
    <Routes>
      <Route element={<HomeLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/previous" element={<Previous />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/personal-room" element={<Personal />} />
      </Route>
      <Route element={<MeetingLayout />}>
        <Route path="/meeting/:id" element={<Meeting />} />
      </Route>
    </Routes>
  )
}

export default App