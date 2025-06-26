# 🎬 CineView: Průzkumník filmů

CineView je moderní a plně responzivní webová aplikace postavená pomocí Reactu a TypeScriptu. Umožňuje uživatelům prozkoumávat, vyhledávat a filtrovat filmy s využitím [The Movie Database (TMDB) API](https://developer.themoviedb.org/docs). Projekt byl vytvořen jako portfolio piece s cílem demonstrovat pokročilé techniky a osvědčené postupy v moderním frontendovém vývoji.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**[🚀 Live Demo](https://dominik-g-js.github.io/cineview/)**

---

## 📸 Náhled aplikace

*(Doporučuji sem vložit finální screenshot nebo krátký GIF, jak vaše aplikace vypadá v akci. Nahrajte ho do repozitáře a upravte cestu.)*

![image](https://github.com/user-attachments/assets/93975f21-2a6f-4787-adfc-f72977b614e1)


---

## ✨ Klíčové funkce

* **Prozkoumávání filmů:** Zobrazení populárních filmů v přehledné a responzivní mřížce.
* **Detailní pohled:** Po kliknutí na film se zobrazí samostatná stránka s podrobnými informacemi – popis, žánry, délka filmu, hodnocení a další.
* **Chytré vyhledávání:** Vyhledávací pole s "debouncingem" pro plynulé vyhledávání bez zbytečného zatěžování API.
* **Filtrování podle žánrů:** Interaktivní seznam žánrů pro okamžité filtrování zobrazených filmů.
* **Formulář s validací:** Na stránce detailu je formulář pro odeslání recenze, vytvořený pomocí React Hook Form a validovaný pomocí Zod.
* **Profesionální UX:** Aplikace využívá "Loading Skeletons" pro plynulé zobrazení při načítání dat, což zlepšuje celkový uživatelský dojem.
* **Plně responzivní design:** Uživatelské rozhraní je optimalizováno pro všechny velikosti obrazovek, od mobilů po velké monitory.

---

## 🛠️ Přehled technologií

Níže je přehled klíčových technologií a knihoven použitých v tomto projektu a důvod jejich výběru.

| Technologie         | Účel a přínos                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **React (s Vite)** | Moderní a rychlé vývojové prostředí pro budování reaktivních UI.                                                          |
| **TypeScript** | Zajišťuje typovou bezpečnost, zlepšuje čitelnost kódu a usnadňuje údržbu rozsáhlejších aplikací.                           |
| **TailwindCSS** | Umožňuje rychlý a konzistentní design pomocí utility-first přístupu.                                                        |
| **TanStack Query** | Robustní knihovna pro správu dat ze serveru. Stará se o data fetching, caching, a stavy (loading, error), čímž nahrazuje komplexní `useEffect` logiku. |
| **React Router** | Zajišťuje routing na straně klienta a umožňuje vícestránkovou strukturu aplikace.                                          |
| **Zustand** | Minimalistická knihovna pro globální správu stavu, použitá pro sdílení stavu filtrů napříč komponentami.                    |
| **Shadcn/ui** | Komponentová knihovna postavená na TailwindCSS pro rychlé skládání profesionálně vypadajícího a přístupného UI.             |
| **React Hook Form** | Výkonná knihovna pro správu stavu, odesílání a validaci formulářů s minimálním počtem re-renderů.                           |
| **Zod** | Knihovna pro definování schémat a validaci dat, která zajišťuje, že data ve formulářích i z API mají správný formát.      |

---

## 🔧 Instalace a spuštění lokálně

Pro spuštění projektu na vašem lokálním stroji postupujte následovně:

1.  **Naklonujte repozitář:**
    ```bash
    git clone [https://github.com/Dominik-G-js/cineview.git](https://github.com/Dominik-G-js/cineview.git)
    cd cineview
    ```

2.  **Nainstalujte závislosti:**
    ```bash
    npm install
    ```

3.  **Nastavte API klíč:**
    * Vytvořte v kořenovém adresáři projektu soubor `.env.local`.
    * Do souboru vložte svůj API klíč z [themoviedb.org](https://www.themoviedb.org/settings/api) v následujícím formátu:
        ```
        VITE_TMDB_API_KEY=VÁŠ_API_KLÍČ_SEM
        ```

4.  **Spusťte vývojový server:**
    ```bash
    npm run dev
    ```
    Aplikace by měla být dostupná na adrese `http://localhost:5173`.

---

## 🚀 Nasazení (Deployment)

Tento projekt je nakonfigurován pro snadné nasazení na GitHub Pages.

Pro nasazení stačí spustit jediný příkaz, který aplikaci sestaví a nahraje do `gh-pages` větve:
```bash
npm run deploy
```

---

## ✍️ Autor

**Dominik G.**

* **GitHub:** [@Dominik-G-js](https://github.com/Dominik-G-js)
* **LinkedIn:** [linkedin.com/in/dominik-g-9aab2b225](https://www.linkedin.com/in/dominik-g-9aab2b225/)
