import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { HeroSection } from '@/components/common/HeroSection'
import { AboutUs } from '@/components/common/AboutUs'
import { OurService } from '@/components/common/OurService'

// Pages will be created here when needed
// import { HomePage } from '@/pages/HomePage'
// import { PropertiesPage } from '@/pages/PropertiesPage'
// etc.

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        {/* Routes will be added here when pages are created */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutUs />
              <OurService />
            </>
          }
        />
      </Routes>
    </Layout>
  )
}

