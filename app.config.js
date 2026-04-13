import 'dotenv/config';

export default {
  expo: {
    name: "MedBridge",
    slug: "medbridge",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: false,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.medbridge.app",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.medbridge.app",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    },
    plugins: [
      [
        "expo-image-picker",
        {
          photosPermission: "MedBridge needs access to your photos to scan medical reports.",
          cameraPermission: "MedBridge needs camera access to photograph medical reports.",
        },
      ],
    ],
  },
};
