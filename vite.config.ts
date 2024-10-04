import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components/'), 
			'@hooks': path.resolve(__dirname, './src/hooks/'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
});
