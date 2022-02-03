import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import DefaultLayout from './layout/DefaultLayout'

import Event from './pages/Event'
import Events from './pages/Events'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="hjem" element={<Home />} />
          <Route path="events">
            <Route index element={<Events />} />
            <Route path=":slug" element={<Event />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
