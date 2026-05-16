// types/index.ts

export type ColorAccent = 'red' | 'gold' | 'sage' | 'green'
export type SectionTheme = 'dark' | 'cream' | 'red'
export type ButtonVariant = 'primary' | 'gold' | 'secondary' | 'ghost'

export interface ContactFormData {
  name:    string
  company: string
  email:   string
  phone?:  string
  message: string
  type:    'GENERAL' | 'WHOLESALE' | 'LOGISTICS' | 'MEDIA'
}

export interface ActionResult<T = unknown> {
  success: boolean
  data?:   T
  error?:  string
}
