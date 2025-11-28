import { ReactNode } from 'react'
import { Footer } from './Footer'
import './Layout.scss'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  )
}

