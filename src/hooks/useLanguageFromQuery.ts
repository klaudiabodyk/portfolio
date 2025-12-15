import { useSearchParams } from 'react-router-dom'

export const useLanguageFromQuery = () => {
  const [searchParams] = useSearchParams()
  const langParam = searchParams.get('lang')

  return langParam
}

export const getLanguageFromQuery = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('lang')
}

export const useThemeFromQuery = () => {
  const [searchParams] = useSearchParams()
  const themeParam = searchParams.get('theme')

  return themeParam
}

export const getThemeFromQuery = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('theme')
}
