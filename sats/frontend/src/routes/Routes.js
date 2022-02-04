import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from '../components/Navigation'
import DefaultLayout from '../layouts/DefaultLayout'
import Booking from '../pages/Booking'
// import GroupClass from '../pages/GroupClass'
import GroupTraining from '../pages/GroupTraining'
import GroupClassRefactored from '../pages/GroupClassRefactored'

import Home from '../pages/Home'
// import Trainings from '../pages/Trainings'
import TrainingsRefactored from '../pages/TrainingsRefactored'

function SatsRoutes() {
  return (
    <Router>
      <Navigation />
      <Routes element={<DefaultLayout />}>
        <Route>
          <Route index element={<Home />} />
          <Route path="hjem" element={<Home />} />
          {/* <Route path="/trening" element={<Trainings />} /> */}
          <Route path="trening" element={<TrainingsRefactored />} />
          <Route path="booking" element={<Booking />} />
          <Route path="gruppetrening">
            <Route index element={<GroupTraining />} />
            <Route path=":slug" element={<GroupClassRefactored />} />
          </Route>
          {/* <Route  path="/gruppetrening/:slug" element={<GroupClass />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default SatsRoutes
