import client from '../client'

export const createContact = async (body) => {
  // Henter ut name og message som funksjonen mottar
  const { name, message } = body
  // Bruker try / catch for å håndtere feil som kan oppstå
  try {
    // Kaller .create
    // Spesifiserer hvor vi skal lagre det (ref name="contact" på schema)
    // Sender med name og message som schema vårt har som felter
    await client.create({ _type: 'contact', name, message })
  } catch (error) {
    // Sender feilmeldingen tilbake dit funksjonen ble kalt
    throw new Error(error)
  }
}
