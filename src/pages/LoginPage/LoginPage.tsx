import { useState, type FormEvent } from "react"
import { useAuth } from "../../hooks/useAuth"
import { SERVER_URL } from "../../config/api"
import { ContentWrapper } from "../../layout/ContentWrapper"
import { LoginPageStyled } from "./LoginPage.styled"
import { Button } from "../../components/atoms/Button/Button"
import { Input } from "../../components/atoms/Input/Input"

export const LoginPage = () => {
  const { userData, setUserData, logout } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setError(null)

    const body = new URLSearchParams()

    body.append("username", email)
    body.append("password", password)

    try {
      const response = await fetch(`${SERVER_URL}/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()

      setUserData(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  const handleCancel = () => {
    setEmail("")
    setPassword("")
    setError(null)
  }

  if (userData) {
    return (
      <ContentWrapper pageTitle="Login">
        <LoginPageStyled>
          <p>Velkommen {userData.user.firstname} {userData.user.lastname}</p>

          <Button
            type="button"
            onClick={logout}
          >
            Log ud
          </Button>
        </LoginPageStyled>
      </ContentWrapper>
    )
  }
  return (
    <ContentWrapper pageTitle="Login">
      <LoginPageStyled>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <Input
            id="email"
            name="email"
            type="email"
            label="Din email:"
            placeholder="Indtast din email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="password"
            name="password"
            type="password"
            label="Din adgangskode:"
            placeholder="Indtast din adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <div className="buttons">
            <Button type="submit">Login</Button>

            <Button type="button" onClick={handleCancel}>Annuller</Button>
          </div>

          <div className="links">
            <a href="#">Glemt adgangskode?</a>

            <a href="#">Opret profil</a>
          </div>
        </form>
      </LoginPageStyled>
    </ContentWrapper>
  )
}
