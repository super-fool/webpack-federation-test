import React, { Suspense } from 'react'
const Layout = React.lazy(() => import('longfor_ui/Layout'))

console.log(Layout)
const App = () => {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <Layout />
      </Suspense>
      <div>main app</div>
    </div>
  )
}

export default App