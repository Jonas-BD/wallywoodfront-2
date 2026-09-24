import { FooterStyled } from "./Footer.styled"

export const Footer = () => {
  return (
    <FooterStyled>
      <section>
        <div>
          <h3>WallyWood</h3>
          <p>Øster Uttrupvej 1</p>
          <p>9000 Aalborg</p>
        </div>
        <div>
          <p>CVR: 12345678</p>
          <p>MAIL: info@plakatshoppen.dk</p>
          <p>MOBIL: +45 9812 3456</p>
        </div>
      </section>
      <section>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
      </section>
    </FooterStyled>
  )
}
