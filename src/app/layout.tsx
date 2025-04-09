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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // On first load, check user preference
                function getInitialTheme() {
                  const persistedTheme = localStorage.getItem('theme');
                  const hasPersistedTheme = typeof persistedTheme === 'string';

                  // If the user has explicitly chosen light or dark,
                  // let's use it. Otherwise, let's check the media query
                  if (hasPersistedTheme) {
                    return persistedTheme;
                  }

                  // Check if media query matches
                  const mql = window.matchMedia('(prefers-color-scheme: dark)');
                  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

                  if (hasMediaQueryPreference) {
                    return mql.matches ? 'dark' : 'light';
                  }

                  // default to 'light'
                  return 'light';
                }

                const theme = getInitialTheme();

                // add or remove the 'dark' class based on if the theme is 'dark'
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
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