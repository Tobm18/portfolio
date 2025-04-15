import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Tom BALLESTER | Développeur Web',
  description: 'Portfolio de Tom BALLESTER, Étudiant et Développeur Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function applyTheme() {
                // On first load, check user preference
                function getInitialTheme() {
                  const persistedTheme = localStorage.getItem('theme');
                  const hasPersistedTheme = typeof persistedTheme === 'string';

                  // Si l'utilisateur a déjà fait un choix explicite, on le respecte
                  if (hasPersistedTheme) {
                    return persistedTheme;
                  }

                  // Premier chargement : on utilise le mode sombre par défaut
                  return 'dark';
                }

                const theme = getInitialTheme();

                // Appliquer le thème après le rendu initial
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }

                // Sauvegarder le thème par défaut au premier chargement
                if (!localStorage.getItem('theme')) {
                  localStorage.setItem('theme', 'dark');
                }
              }

              // Exécuter après l'hydratation
              if (window.requestIdleCallback) {
                window.requestIdleCallback(applyTheme);
              } else {
                window.setTimeout(applyTheme, 100);
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
}