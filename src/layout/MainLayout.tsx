import { Outlet } from "react-router-dom"
import { Footer } from "../components/organisms/Footer/Footer"
import { Header } from "../components/organisms/Header/Header"
import { ContainerStyle } from "../styled/Container.style"

export const MainLayout = () => {
  return (
    <ContainerStyle>
      <Header />
      <Outlet />
      <Footer />
    </ContainerStyle>
  )
}
