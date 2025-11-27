import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

// Pages will be created here when needed
// import { HomePage } from '@/pages/HomePage'
// import { PropertiesPage } from '@/pages/PropertiesPage'
// etc.

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        {/* Routes will be added here when pages are created */}
        <Route path="/" element={<div>Home Page - To be implemented</div>} />
      </Routes>
    </Layout>
  )
}

