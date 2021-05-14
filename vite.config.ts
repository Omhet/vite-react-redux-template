import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default ({ command }) => {
  const isDev = command === 'serve';

  return defineConfig({
    css: {
      modules: {
        generateScopedName: isDev ? '[name]__[local]___[hash:base64:5]' : undefined,
      },
    },
    plugins: [
      reactRefresh(),
      reactSvgPlugin({
        defaultExport: 'component',
      }),
    ],
  });
};
