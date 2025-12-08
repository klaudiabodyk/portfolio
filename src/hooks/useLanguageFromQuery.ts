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
