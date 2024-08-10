import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { LayoutProps } from "../interfaces/interfaces"


export const Layout = ({ children, style } : LayoutProps) => {
  return (
   <div style={style}>
    <Header />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
    <Footer />
   </div>
  )
}
