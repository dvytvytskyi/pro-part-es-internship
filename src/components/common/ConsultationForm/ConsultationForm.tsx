import { useState } from 'react'
import './ConsultationForm.scss'

interface Errors {
  name?: string
  phone?: string
}

export const ConsultationForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Errors = {}

    if (!name.trim()) {
      newErrors.name = 'Please enter your name'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name should be at least 2 characters'
    }

    const phoneDigits = phone.replace(/[^\d+]/g, '')
    if (!phoneDigits) {
      newErrors.phone = 'Please enter your phone number'
    } else if (phoneDigits.length < 7) {
      newErrors.phone = 'Phone number seems too short'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitted(true)
    console.log('Form submitted:', { name, phone })
  }

  return (
    <section className="consultation-form">
      <div className="consultation-form__container">
        <h2 className="consultation-form__title">Get help from our expert</h2>
        <p className="consultation-form__description">
          Our expert will help you with property purchase, management, or consulting in Costa Del Sol.
        </p>
        <form className="consultation-form__form" onSubmit={handleSubmit} noValidate>
          <div className="consultation-form__field">
            <input
              type="text"
              className={`consultation-form__input ${errors.name ? 'consultation-form__input--error' : ''}`}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="consultation-form__error">{errors.name}</p>}
          </div>

          <div className="consultation-form__field">
            <input
              type="tel"
              className={`consultation-form__input ${errors.phone ? 'consultation-form__input--error' : ''}`}
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="consultation-form__error">{errors.phone}</p>}
          </div>

          <button type="submit" className="consultation-form__button">
            Get a consultation
          </button>

          {isSubmitted && Object.keys(errors).length === 0 && (
            <p className="consultation-form__success">
              Thank you! We will contact you soon.
            </p>
          )}
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

