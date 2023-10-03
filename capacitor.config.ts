import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.qr.generator.com',
  appName: 'qr-generator-app',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
