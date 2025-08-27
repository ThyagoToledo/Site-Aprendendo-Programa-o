/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '2.5rem',
              marginBottom: '1rem',
            },
            h2: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '2rem',
              marginTop: '2rem',
              marginBottom: '1rem',
              borderBottom: '2px solid #e5e7eb',
              paddingBottom: '0.5rem',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            p: {
              marginBottom: '1rem',
              lineHeight: '1.7',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.9rem',
              color: '#dc2626',
              fontFamily: 'JetBrains Mono, Fira Code, Monaco, Consolas, monospace',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              margin: '1.5rem 0',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
            },
            ul: {
              margin: '1rem 0',
              paddingLeft: '2rem',
            },
            ol: {
              margin: '1rem 0',
              paddingLeft: '2rem',
            },
            li: {
              marginBottom: '0.5rem',
              lineHeight: '1.6',
            },
            blockquote: {
              borderLeft: '4px solid #6366f1',
              backgroundColor: '#f8fafc',
              margin: '1.5rem 0',
              padding: '1rem 1.5rem',
              fontStyle: 'italic',
            },
            a: {
              color: '#6366f1',
              textDecoration: 'underline',
              '&:hover': {
                color: '#4338ca',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
