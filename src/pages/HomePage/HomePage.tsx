import curtainImage from "../../assets/curtian.png"
import { PosterList } from "../../components/molecules/PosterList/PosterList"
import { ContentWrapper } from "../../layout/ContentWrapper"
import { MainStyle } from "../../styled/Main.style"

export const HomePage = () => {

  return (
    <MainStyle>
      <img src={curtainImage} alt="Curtain" />
      <ContentWrapper pageTitle="Forside">

        <h2>Fire tilfældige...</h2>

        <PosterList mode="random" />
      </ContentWrapper>
    </MainStyle>
  )
}
