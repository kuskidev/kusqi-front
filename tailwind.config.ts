import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            primary: '#c2e1fa',
            secondary: '#849fe4',
        },
    },
    daisyui: {
        themes: [
            {
                kusqitheme: {
                    primary: '#c2e1fa',
                    'primary-focus': '#849fe4',
                    'primary-content': '#ffffff',
                    secondary: '#849fe4',
                    'secondary-focus': '#849fe4',
                    'secondary-content': '#ffffff',
                    accent: '#37cdbe',
                    'accent-focus': '#2aa79b',
                    'accent-content': '#ffffff',
                    neutral: '#3d4451',
                    'neutral-focus': '#2a2e37',
                    'neutral-content': '#ffffff',
                    base: '#000000',
                    'base-100': '#ffffff',
                    'base-200': '#f9fafb',
                    'base-300': '#d1d5db',
                    'base-content': '#1f2937',
                    info: '#2094f3',
                    success: '#009485',
                    warning: '#ff9900',
                    error: '#ff5724',
                },
            },
        ],
    },
    plugins: [daisyui, typography],
}
export default config
