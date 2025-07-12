import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import MainContentLayout from './layouts/MainContentLayout.jsx'
import ReferenceWithRefs from './pages/ReferenceWithRefs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<MainContentLayout />}>
          <Route path={'/reference-with-refs'} element={<ReferenceWithRefs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App