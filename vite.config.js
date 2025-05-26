import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@fullcalendar/core/main.css"; @import "@fullcalendar/daygrid/main.css"; @import "@fullcalendar/timegrid/main.css"; @import "@fullcalendar/list/main.css";`
      }
    }
  }
});