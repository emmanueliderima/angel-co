import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Meeting from "./pages/Meeting"
import HomeLayout from "./layouts/HomeLayout"
import MeetingLayout from "./layouts/MeetingLayout"

const App = () => {

  return (
    <Routes>
      <Route element={<HomeLayout />} >
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<MeetingLayout />}>
        <Route path="/meeting/:id" element={<Meeting />} />
      </Route>
    </Routes>
  )
}

export default App