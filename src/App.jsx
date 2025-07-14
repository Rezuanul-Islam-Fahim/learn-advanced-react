import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import MainContentLayout from './layouts/MainContentLayout.jsx'
import ReferenceWithRefs from './pages/ReferenceWithRefs'
import RefsDomManipulation from './pages/RefsDomManipulation.jsx'
import SyncrognizingWithEffects from './pages/SyncrognizingWithEffects.jsx'
import CustomHooks from './pages/CustomHooks.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<MainContentLayout />}>
          <Route path={'/reference-with-refs'} element={<ReferenceWithRefs />} />
          <Route path={'/refs-dom'} element={<RefsDomManipulation />} />
          <Route path={'/syncrognize-effects'} element={<SyncrognizingWithEffects />} />
          <Route path={'/custom-hooks'} element={<CustomHooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App