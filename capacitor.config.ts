import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'qr-generator-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
