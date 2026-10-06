# Caravanstalling De Bunders

Volledig statische website voor Caravanstalling De Bunders in Venhorst. De site
gebruikt alleen HTML, CSS, JavaScript en afbeeldingen en kan rechtstreeks via
GitHub Pages worden gepubliceerd.

## Indeling

- `index.html` is de startpagina; de overige HTML-bestanden zijn subpagina's.
- `assets/css/style.css` bevat de basis, toegankelijkheid, navbar en mobiele menuknop.
- `assets/css/home.css` bevat de homepage en gedeelde vormgeving, zoals knoppen en footer.
- `assets/css/subpage.css` bevat de aanvullende opmaak van de subpagina's.
- `assets/js/navigation.js` opent en sluit het mobiele menu.
- `assets/js/calculator.js` berekent de jaarprijs op de prijzenpagina.
- `assets/images` bevat alleen de gebruikte foto's, het grote logo, voertuigpictogrammen
  en `favicon.svg` voor het tabbladicoon. De navbar-iconen en pijlen staan als SVG in de HTML.
- `.nojekyll` zorgt dat GitHub Pages de bestanden ongewijzigd publiceert.

## Aanpassen

- Teksten en links staan in het HTML-bestand van de betreffende pagina.
- De telefoonweergave gebruikt dezelfde HTML, met `@media`-regels in de CSS.
- Navbar en footer staan in elk HTML-bestand; wijzigingen aan hun inhoud moeten
  op alle pagina's worden doorgevoerd. De opmaak wordt gedeeld via CSS.
- Tarieven staan in `index.html` en in de kaarten en voertuigkeuzelijst van
  `prijzen.html`. Houd deze bedragen gelijk. De calculator rekent met minimaal 4,5 meter.
- Veelgestelde vragen gebruiken HTML `details` en werken zonder JavaScript.
- Aanvragen en accounts verlopen via externe links naar 1Stalling.
- De map `.git` bewaart de versiegeschiedenis; `.gitignore` sluit tijdelijke
  systeembestanden uit. Deze bestanden horen bij het beheer, niet bij de zichtbare site.

## Lokaal bekijken

Open `index.html` in een browser. Er hoeft niets geïnstalleerd of gestart te
worden.

## Publiceren met GitHub Pages

1. Upload deze map naar de `main`-branch van een GitHub-repository.
2. Open in GitHub **Settings > Pages**.
3. Kies bij **Source** voor **Deploy from a branch**.
4. Selecteer de branch **main**, de map **/(root)** en klik op **Save**.

GitHub toont daarna het openbare adres van de website.
