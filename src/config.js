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
        USER_POOL_ID: "us-east-1_HtPNLAf1h",
        APP_CLIENT_ID: "3jjif2lbn54ihi4idp6dt9p8dv",
        IDENTITY_POOL_ID: "us-east-1:b362b462-0027-434c-bbf0-80028bbc5231"
    }
};
