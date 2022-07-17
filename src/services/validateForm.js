export const validateHomeData = ({welcomeText, slides}) => {
  const errors = {}
  if (!welcomeText || welcomeText.length < 20) {
    errors.welcomeText = 'El texto de bienvenida debe tener al menos 20 caracteres'
  }
  slides.forEach((slide, index) => {
    if (!slide.img) {
      errors[`slides[${index}].img`] = 'La imagen es obligatoria'
    }
    if (!slide.title) {
      errors[`slides[${index}].title`] = 'El título es requerido'
    }
    if (!slide.description) {
      errors[`slides[${index}].description`] = 'La descripción es requerido'
    }
  })
  return errors
}