import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/common/HeroSection'
import { BottomNav } from '@/components/common/BottomNav'
import { AboutUs } from '@/components/common/AboutUs'
import { OurService } from '@/components/common/OurService'
import { Areas } from '@/components/common/Areas'
import { MainPageMapContainer } from '@/components/common/MainPageMapContainer'
import { LegalBlock } from '@/components/common/LegalBlock'
import { ConsultationForm } from '@/components/common/ConsultationForm'

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
              <div className="layout__header-hero-wrapper">
                <Header />
                <HeroSection />
              </div>
              <main className="layout__main">
                <BottomNav />
                <AboutUs />
                <OurService />
                <Areas />
                <MainPageMapContainer />
                <LegalBlock />
                <ConsultationForm />
              </main>
            </>
          }
        />
      </Routes>
    </Layout>
  )
}

