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
import { NewBuildingPage } from '@/pages/NewBuildingPage'
import { SecondaryPage } from '@/pages/SecondaryPage'
import { RentPage } from '@/pages/RentPage'
import { MapPage } from '@/pages/MapPage'
import { AreasPage } from '@/pages/AreasPage'
import { ConsultingPage } from '@/pages/ConsultingPage'
import { BlogPage } from '@/pages/BlogPage'
import { AreaPage } from '@/pages/AreaPage'
import { ServicePage } from '@/pages/ServicePage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import { PropertyDetailsPage } from '@/pages/PropertyDetailsPage'
import { FavoritesPage } from '@/pages/FavoritesPage'

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
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
        <Route path="/new-building" element={<NewBuildingPage />} />
        <Route path="/secondary" element={<SecondaryPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/areas/:areaId" element={<AreaPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/properties/:propertyId" element={<PropertyDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  )
}

