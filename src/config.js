export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "cloud-ams-public"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://w6jba0afgc.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_3oRV9IE6d",
        APP_CLIENT_ID: "66fcdco6pagraqiidg766pbnb8",
        IDENTITY_POOL_ID: "us-east-1:50bf6e08-dfb1-41dc-af7b-4b932f05ae20"
    }
};
