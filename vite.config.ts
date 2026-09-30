import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: base depends on where this is hosted.
//   - Root user page (ronankongala.github.io):        base: '/'
//   - Project page (ronankongala.github.io/<repo>/):  base: '/<repo>/'
// The hero image is referenced via import.meta.env.BASE_URL, so it follows this
// automatically once base is set correctly.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
