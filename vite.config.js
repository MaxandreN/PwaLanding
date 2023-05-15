import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
            "id" : "id",  
            "name" : "morpion",  
            "short_name" : "morpion",  
            "start_url" : "/",  
            "display" : "fullscreen",  
            "icons" : [  
              {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any"  
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png",
                "purpose": "any" 
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any" 
            } 
            ],  
            "theme_color" : "#87bd43",  
            "background_color" : "#161616",  
            "scope" : "/",  
            "lang": "fr",  
            "orientation" : "portrait",  
            "description" : "",  
            "screenshots" : [],  
            "categories" : ["lifestyle", "news", "finance"],  
            "related_apps" : [],  
            "prefer_related_apps" : true     
      }
    })
    
  ],
 })


