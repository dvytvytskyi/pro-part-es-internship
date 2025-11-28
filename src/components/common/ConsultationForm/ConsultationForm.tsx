import { useState } from 'react'
import './ConsultationForm.scss'

export const ConsultationForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { name, phone })
  }

  return (
    <section className="consultation-form">
      <div className="consultation-form__container">
        <h2 className="consultation-form__title">Get help from our expert</h2>
        <p className="consultation-form__description">
          Our expert will help you with property purchase, management, or consulting in Costa Del Sol.
        </p>
        <form className="consultation-form__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="consultation-form__input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            className="consultation-form__input"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className="consultation-form__button">
            Get a consultation
          </button>
        </form>
        <p className="consultation-form__disclaimer">
          When you click "Get a Consultation," you agree to our{' '}
          <a href="/terms" className="consultation-form__link">Terms of Service</a> and{' '}
          <a href="/privacy" className="consultation-form__link">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}

