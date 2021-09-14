import React, { Suspense, lazy } from 'react'
import { Footer } from 'longfor_ui/component'
const Layout = lazy(() => import('longfor_ui/Layout'))

const App = () => {
  return (
    <div>
        <div>hello</div>
      <Suspense fallback={'loading...'}>
        <Layout />
      </Suspense>
    </div>
  )
}

export default App