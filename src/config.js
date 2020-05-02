export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-s3uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://s5uua2c5u1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xbSuwwbCS",
    APP_CLIENT_ID: "3qo5ug913v4anhue5hfl9rqs3l",
    IDENTITY_POOL_ID: "us-east-1:823bba84-0117-45ef-9de9-e361fce408e2"
  }
};