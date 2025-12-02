import { ReactNode } from 'react'
import { Footer } from './Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton/WhatsAppButton'
import './Layout.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

