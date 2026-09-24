import { Button } from "../../components/atoms/Button/Button"
import { Input } from "../../components/atoms/Input/Input"
import { ContentWrapper } from "../../layout/ContentWrapper"
import { ContactPageStyled } from "./ContactPage.styled"

export const ContactPage = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    alert("Beskeden er sendt!")
  }

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const form = event.currentTarget.closest("form")
    if (form) {
      form.reset()
    }
  }

  return (
    <ContentWrapper pageTitle="Kontakt">
      <ContactPageStyled>
        <h2>Kontakt os</h2>
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            label="Dit navn:"
            placeholder="Indtast dit navn"
            required
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="Din email:"
            placeholder="Indtast din email"
            required
          />

          <Input
            id="message"
            name="message"
            type="textarea"
            label="Din besked:"
            placeholder="Indtast din besked"
            required
          />

          <div className="buttons">
            <Button type="submit">Send</Button>

            <Button type="button" onClick={handleCancel}>Annuller</Button>
          </div>
        </form>
      </ContactPageStyled>
    </ContentWrapper>
  )
}
