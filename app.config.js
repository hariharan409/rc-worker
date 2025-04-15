const ENV = {
    development: {
        name: "GIFT APP DEV",
        extra: {
            REDIRECT_URL: process.env.EXPO_PUBLIC_DEV_REDIRECT_URL,
            BACKEND_API_URL: process.env.EXPO_PUBLIC_DEV_BACKEND_API_URL,
            TENANT_ID: process.env.EXPO_PUBLIC_DEV_TENANT_ID,
            CLIENT_ID: process.env.EXPO_PUBLIC_DEV_CLIENT_ID,
        }
    },
    uat: {
        name: "GIFT APP UAT",
        extra: {
            REDIRECT_URL: process.env.EXPO_PUBLIC_UAT_REDIRECT_URL,
            BACKEND_API_URL: process.env.EXPO_PUBLIC_UAT_BACKEND_API_URL,
            TENANT_ID: process.env.EXPO_PUBLIC_UAT_TENANT_ID,
            CLIENT_ID: process.env.EXPO_PUBLIC_UAT_CLIENT_ID,
        }
    },
    production: {
        name: "GIFT APP PROD",
        extra: {
            REDIRECT_URL: process.env.EXPO_PUBLIC_PROD_REDIRECT_URL,
            BACKEND_API_URL: process.env.EXPO_PUBLIC_PROD_BACKEND_API_URL,
            TENANT_ID: process.env.EXPO_PUBLIC_PROD_TENANT_ID,
            CLIENT_ID: process.env.EXPO_PUBLIC_PROD_CLIENT_ID,
        }
    }
}

module.exports = ({config}) => {
    const environment = process.env.EXPO_PUBLIC_ENV;
    let envConfig = ENV[environment];

    return {
        ...config,
        name: envConfig.name,
        extra: {
            ...config.extra,
            ...envConfig.extra,
          },
    }
}