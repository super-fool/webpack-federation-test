import React, { lazy, Suspense } from 'react'
import Layout from './components/Layout'
const Home = lazy(() => import('main_app/Home'));
const App = () => {
  return (
    <div>
      <Layout>
        <Suspense fallback="loading view....">
          <Home />
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;