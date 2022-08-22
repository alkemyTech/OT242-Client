import * as Yup from 'yup';
import { testImage } from './testImage';

/**
 * Validation for the update home data form, used in UpdateHomeData.jsx
 */
export const HomeDataSchema = Yup.object().shape({
  welcomeTitle: Yup.string().required('Requerido'),
  welcomeText: Yup.string()
    .required('Requerido')
    .min(20, 'El texto de bienvenida debe tener al menos 20 caracteres'),
  slides: Yup.array().of(Yup.object().shape({
    img: Yup.string()
      .required('Requerido')
      .test('is-url', 'Debe ser una URL válida', value => testImage(value,1000).then(res => res === 'success')),
    title: Yup.string()
      .required('Requerido'),
    description: Yup.string()
      .required('Requerido')
  }))
});

export const ActivitiesSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  content: Yup.string().required('Requerido'),
})

export const NewsValidationSchema = Yup.object().shape({
  name: Yup.string().required('*Requerido'),
  content: Yup.string().required('*Requerido'),
  categoryId: Yup.number().required('*Requerido'),
})

export const MembersValidationSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  role: Yup.string().required('Requerido'),
  content: Yup.string().required('Requerido'),
})

export const CategoriesValidationSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  description: Yup.string().required('Requerido')
})

export const TestimonialsValidationSchema = Yup.object().shape({
  name: Yup.string().required('*Requerido'),
  content: Yup.string().required('*Requerido')
})