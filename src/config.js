const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-x31wwa76o64y"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://serverless-stack.phelerox.eu/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_viE32FXKe",
    APP_CLIENT_ID: "4l5qua34n7uis4quusphhoboo0",
    IDENTITY_POOL_ID: "us-east-1:43026d40-b74b-4d61-bca7-9856ac406a74"
  },
  STRIPE_KEY: "sk_test_VUUVIOLGDJ1y5LWQCt9S7osB00ulOv5PfS",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ink3zcamuhvl"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://serverless-stack.phelerox.eu/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_EVmh8cz9q",
    APP_CLIENT_ID: "6tt138lm1e1cj49hqrr55dl3u6",
    IDENTITY_POOL_ID: "us-east-1:45960fa9-1b26-49b3-872c-711b415249d8"
  },
  STRIPE_KEY: "sk_test_VUUVIOLGDJ1y5LWQCt9S7osB00ulOv5PfS",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};