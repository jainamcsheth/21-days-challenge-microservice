import { CognitoUserPool } from 'amazon-cognito-identity-js';

const UserPoolData = {
  UserPoolId: 'us-west-2_oRpIM8yY8',
  ClientId: '28tmo30kosrc6g2cs4utbr6vjr',
};

export default new CognitoUserPool(UserPoolData);
