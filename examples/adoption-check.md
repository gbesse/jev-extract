# jev-extract — contrôle d’adoption · adoption check · comprobación de adopción

## Français

Point de départ local, après la préparation indiquée dans le README :

```sh
npm run demo:report
```

Un document qui ne fournit pas une date ne doit pas recevoir une date inventée. Vérifiez le champ absent et sa provenance dans le rapport de démonstration.

## English

Local starting point, after the setup described in the README:

```sh
npm run demo:report
```

A document without a date must not acquire an invented date. Check the absent field and its provenance in the demo report.

## Español

Punto de partida local, después de la preparación descrita en el README:

```sh
npm run demo:report
```

Un documento sin fecha no debe recibir una fecha inventada. Compruebe el campo ausente y su procedencia en el informe de demostración.
## Variante synthétique · Synthetic variation · Variante sintética

```text
invoice_date=null
```

FR : adaptez une copie de la fixture locale à cette situation, puis vérifiez le comportement décrit ci-dessus. Les valeurs sont illustratives, pas des résultats Jev mesurés.

EN: adapt a copy of the local fixture to this situation, then check the behavior described above. Values are illustrative, not measured Jev output.

ES: adapte una copia de la fixture local a esta situación y compruebe el comportamiento descrito arriba. Los valores son ilustrativos, no resultados Jev medidos.

## Second cas · Second case · Segundo caso

```text
candidate_date="2026-02-30"; valid_calendar_date=false
```

**FR :** Le motif extrait aussi une chaîne comme `2026-02-30` : vérifiez la date avec un contrôle calendaire en aval avant de la traiter comme un champ fiable. Le moteur conserve la provenance, mais ne valide pas le calendrier.

**EN:** The extractor also matches a string such as `2026-02-30`: validate calendar dates downstream before treating it as a trusted field. The engine records provenance but does not validate the calendar.

**ES:** El extractor también detecta una cadena como `2026-02-30`: valide las fechas con un control de calendario posterior antes de tratarlas como fiables. El motor conserva la procedencia, pero no valida el calendario.
