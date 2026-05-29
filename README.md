# Voces

App móvil para leer y escuchar cuentos cortos en español.

CCC218 Programación Móvil — CEUTEC San Pedro Sula — 2026-S1-M2

## Stack

- Expo SDK 56 + React Native + TypeScript
- React Navigation v6
- Supabase (Auth + Postgres + Storage)
- `expo-audio` para reproducción, `expo-file-system` para almacenamiento offline

## Cómo correrla

```bash
npm install
npx expo start
```

Escaneá el QR con Expo Go en iOS o Android.

## Equipo

- Angel Rodas — esquema, auth, audio player, sincronización offline
- Dany — design system, navegación, Market, vista de lectura, Library

## Estado

Fase 1 (demo de clase). Solo lectura: 3 cuentos sembrados, leer o escuchar, guardar y descargar para usar sin internet. No incluye lado de escritor. Fecha de demo: 2026-07-06.
