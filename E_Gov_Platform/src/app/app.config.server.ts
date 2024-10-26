import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

const serverConfig = {
  // Define server-specific configurations here
  providers: [
    // Your server-side providers
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
