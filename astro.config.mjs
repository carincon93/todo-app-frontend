// @ts-check
import { defineConfig, envField } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            URL_BACKEND: envField.string({
                context: 'client',
                access: 'public',
            }),
        },
    },
    integrations: [alpinejs()],

    output: 'server',

    vite: {
        plugins: [tailwindcss()],
    },
})
