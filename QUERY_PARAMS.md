# Query Parameters Documentation

Aplikacja obsługuje parametry URL (query parameters) do zmiany języka i motywu.

## Dostępne parametry

### 1. Język (`lang`)

Zmienia język interfejsu aplikacji.

**Dozwolone wartości:**
- `pl` - Polski
- `en` - English

**Przykłady:**
```
https://yoursite.com/?lang=pl
https://yoursite.com/?lang=en
https://yoursite.com/software-engineer?lang=pl
https://yoursite.com/web-development?lang=en
```

### 2. Motyw (`theme`)

Zmienia motyw kolorystyczny aplikacji.

**Dozwolone wartości:**
- `light` - Jasny motyw
- `dark` - Ciemny motyw

**Przykłady:**
```
https://yoursite.com/?theme=dark
https://yoursite.com/?theme=light
https://yoursite.com/ai-workshops?theme=dark
https://yoursite.com/instagram-beauty?theme=light
```

## Łączenie parametrów

Możesz używać obu parametrów jednocześnie, łącząc je znakiem `&`:

**Przykłady:**
```
https://yoursite.com/?lang=pl&theme=dark
https://yoursite.com/?lang=en&theme=light
https://yoursite.com/software-engineer?lang=pl&theme=dark
https://yoursite.com/web-development?lang=en&theme=light
```

## Zachowanie

- **Język**: Zmiana języka przez query param nadpisuje zapisany język w localStorage
- **Motyw**: Zmiana motywu przez query param nadpisuje zapisany motyw w localStorage
- **Trwałość**: Po zmianie przez query param, wybrana opcja zostaje zapisana w localStorage i będzie używana przy kolejnych wizytach
- **Priorytet**: Query params mają wyższy priorytet niż localStorage

## Przykłady użycia

### Udostępnianie linku z polskim językiem i ciemnym motywem:
```
https://yoursite.com/?lang=pl&theme=dark
```

### Link do konkretnej strony z angielskim i jasnym motywem:
```
https://yoursite.com/ai-workshops?lang=en&theme=light
```

### Tylko zmiana języka (motyw pozostaje z localStorage):
```
https://yoursite.com/?lang=pl
```

### Tylko zmiana motywu (język pozostaje z localStorage):
```
https://yoursite.com/?theme=dark
```

## Implementacja techniczna

Parametry są obsługiwane w:
- `src/App.tsx` - główna logika obsługi query params
- `src/context/ThemeContext.tsx` - zarządzanie motywem
- `src/hooks/useLanguageFromQuery.ts` - pomocnicze hooki do odczytu parametrów

## Testowanie

Możesz przetestować działanie parametrów:

1. Otwórz aplikację z parametrem: `/?lang=pl&theme=dark`
2. Sprawdź czy język i motyw się zmieniły
3. Odśwież stronę bez parametrów - ustawienia powinny pozostać
4. Zmień parametry na: `/?lang=en&theme=light`
5. Sprawdź czy zmiany zostały zastosowane

