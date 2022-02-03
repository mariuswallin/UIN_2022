## Inital Setup

- Sette opp React med create-react-app eller bruk base_custom

## React Setup

- Sette opp Routes i App.ks
- Lage komponenter for de ulike sidene (i pages)
- Lage navigasjon komponenten med link til de ulike sidene
- Lage hovedlayouten

## Styled components (hvis du bruker dette)

- Installere pakker
- Legge til debuggingen i babel
- Sette opp global styling
- Sette opp theme
- Sette opp styles (må da definere om noe skal være globalt eller i selve React komponenten)

## Tailwind (hvis du bruker dette)

- Installere pakker
- Sette opp tailwind.config.js
- Sette opp tailwind styling i main.css

## Sanity Setup

npm i -g @sanity/cli
sanity init

- Blir promta med å lage en bruker eller logge inn
- Etter å ha laget en bruker må du lage et prosjekt eller bruke et eksisterende
- Velga datasett => default er produciton
- Velge mappenavn på hvor prosjektet skal være (sanity kaller jeg det)
- Velge om du skal starte på scratch eller ikke (start på scratch)
- Følge anvisningen
  - cd sanity (mappen jeg la sanity i)
  - sanity start

## Sanity filer og mapper

- Filer og mapper initial ([link](https://www.sanity.io/docs/project-structure))
- sanity.json ([link](https://www.sanity.io/docs/sanity-json))
- .env bruk ([link](https://www.sanity.io/docs/studio-environment-variables#dot-env-files-env-f5e9e3158896))

## Sanity Schema

- Lage egne schemas i sanity/schemas
- Schema Doc ([link](https://www.sanity.io/docs/content-modelling))

## Sanity Schema Navngiving

- Singular ⇒ enklere å ref til "of type movie" istedenfor "of type movies"
- aZ ⇒ internasjonalt
- \_ ⇒ kan ikke starte med dette
- Numbers

## Sanity Schema Typer

- Hva er en type i et schema? ([link](https://www.sanity.io/docs/the-building-blocks))
- Default typer ([link](https://www.sanity.io/docs/schema-types))

## Sanity referere til andre documenter

- Knytte dokumenter sammen ([link](https://www.sanity.io/docs/content-modelling#a-document-referencing-another-document-ea63ce02f2fc))

## Sanity refere til flere enn et dokument eller objekt

- Bruke array for å refere til flere ([link](https://www.sanity.io/docs/content-modelling#one-use-of-arrays-986cbdbcbb4e))

## Sanity Validere input i feltene

- Enkel validering ([link](https://www.sanity.io/docs/validation))
- Default validering per type ([link](https://www.sanity.io/docs/schema-types))
- Eks. validering på number ([link](https://www.sanity.io/docs/number-type))

## Sanity Preview

- Hvordan innholdet vises i listevisning / når vi ref til det ([link](https://www.sanity.io/docs/previews-list-views))

## Sanity Sortering

- Hvordan sortere innhold i lister ([link](https://www.sanity.io/docs/sort-orders))

## Sanity Block Content

- Portable text ([link](https://www.sanity.io/guides/introduction-to-portable-text))
- Block content ([link](https://www.sanity.io/docs/block-content))

## Sanity images

- Jobbe med bilder i Sanity ([link](https://www.sanity.io/docs/presenting-images))
- Bildetypen ([link](https://www.sanity.io/docs/image-type))
- Formatere bilde ([link](https://www.sanity.io/docs/image-urls))

## Koble Sanity og React

- Installere Sanity klienten
- Lage .env fil for å lagre nødvendig konfigurasjon som Sanity trenger
- Lage en client.js i utils for å sette opp klienten vi skal bruke for å hente informasjon
- Lage en service.js fil som er knyttet til hvilket schema vi skal hente informasjon fra (eks. articleService, eventService, pageService ...)

## Sanity GROQ

- GROQ ([link](https://www.sanity.io/docs/groq))
- Cheat sheet ([link](https://www.sanity.io/docs/query-cheat-sheet))

## Bruke servicen på en side i pages mappen

- Bruke useEffect og useState for å hente og holde på innholdet vi får ved å bruke servicen
- Rendere innholdet på den siden med ønsket styling og bruk av komponenter
