import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Vault App',
        short_name: 'Vault',
        description: 'Collaborative Management Tool',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#0a0a0a',
        orientation: "portrait",
        lang: "en",
        dir: "ltr",
        icons: [
            {
                src: 'favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            }, {
                src: 'icon32.png',
                sizes: '32x32',
                type: 'image/png',
            }, {
                src: 'icon64.png',
                sizes: '64x64',
                type: 'image/png',
            }, {
                src: 'icon144.png',
                sizes: '144x144',
                type: 'image/png',
            }, {
                src: 'icon250.png',
                sizes: '250x250',
                type: 'image/png',
            }, {
                src: 'icon500.png',
                sizes: '500x500',
                type: 'image/png',
            },
        ],
    }
}