import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import MainContentLayout from './layouts/MainContentLayout.jsx'
import ReferenceWithRefs from './pages/ReferenceWithRefs'
import RefsDomManipulation from './pages/RefsDomManipulation.jsx'
import SyncrognizingWithEffects from './pages/SyncrognizingWithEffects.jsx'
import CustomHooks from './pages/CustomHooks.jsx'
import ExtractRepetationWithHooks from './pages/ExtractRepetationWithHooks.jsx'
import PassReactiveValuesBetweenHooks from './pages/PassReactiveValuesBetweenHooks.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<MainContentLayout />}>
          <Route path={'/reference-with-refs'} element={<ReferenceWithRefs />} />
          <Route path={'/refs-dom'} element={<RefsDomManipulation />} />
          <Route path={'/syncrognize-effects'} element={<SyncrognizingWithEffects />} />
          <Route path={'/custom-hooks-example'} element={<CustomHooks />} />
          <Route path={'/custom-hooks-extract-repetation'} element={<ExtractRepetationWithHooks />} />
          <Route path={'/pass-reactive-values-hooks'} element={<PassReactiveValuesBetweenHooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App