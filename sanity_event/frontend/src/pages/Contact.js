import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import Container from '../components/Container'
import Title from '../components/Title'
import { createContact } from '../lib/services/contactService'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data) => {
    // Starter med å oppdatere loading
    setLoading(true)
    // Resetter feil (når skjema sendes på nytt)
    setError(false)
    // Resetter success (når skjema sendes på nytt)
    setSuccess(false)

    try {
      // Kaller servicen med data
      await createContact(data)
      // Oppdatere success
      setSuccess(true)
    } catch (error) {
      // Lagrer feilmelding
      setError(error.message)
    } finally {
      // Skrur av loading
      setLoading(false)
    }
  }

  return (
    <Container>
      <Title title="Kontakt" />
      {/* Viser nødvendig melding basert på hvordan det gikk å sende */}
      {error ? <p>{error}</p> : null}
      {success ? <p>Takk. Din henvendelse er mottatt</p> : null}
      {/* Sender loading som prop til skjema */}
      {/* Gjør det mulig å endre Send til Sender ... på knappen */}
      <ContactForm loading={loading} onSubmit={onSubmit} />
    </Container>
  )
}
