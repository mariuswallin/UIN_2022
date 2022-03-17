import { useState } from 'react'

export default function ContactForm({ loading, onSubmit }) {
  // Lagrer endringer på input med state
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // handleSubmit trigges ved klikk på send knappen
  // Dette igjen trigger onSubmit som vi får som prop
  // Sender med name og message som skal brukes når vi skal lagre data
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ name, message })
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      action="#"
      className="max-w-lg mt-6 grid grid-cols-1 gap-y-6"
    >
      <label id="name" className="block text-sm font-medium text-gray-700">
        Navn:
        {/* Lytter til endringer og trigger handleNameChange */}
        {/* Oppdatere value med endringen via name */}
        <input
          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          onChange={handleNameChange}
          value={name}
          type="text"
          id="name"
          placeholder="Hva heter du?"
          required
        />
      </label>
      <label id="message" className="block text-sm font-medium text-gray-700">
        Beskjed:
        {/* Lytter til endringer og trigger handleMessageChange */}
        {/* Oppdatere value med endringen via message */}
        <textarea
          rows="4"
          cols="50"
          onChange={handleMessageChange}
          value={message}
          type="text"
          id="message"
          placeholder="Legg til beskjed"
          required
          className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
        />
      </label>
      <button
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        type="submit"
      >
        {/* Endrer teksten basert på om loading er true eller false */}
        {loading ? 'Sender ...' : 'Send'}
      </button>
    </form>
  )
}
