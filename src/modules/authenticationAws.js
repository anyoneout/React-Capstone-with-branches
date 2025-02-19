import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { accessKeyId, region, secretAccessKey } from "../../.aws/credentials";

export async function authenticationAws(email = "", password = "") {
  const apiKey = {
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey
    },
  }
  const client = new DynamoDB(apiKey);
  const niceClient = DynamoDBDocument.from(client);

  const request = {
    TableName: "login",
    Key: {
      email: email,
    }
  }
  const response = await niceClient.get(request);
  if (!response.Item) {
    return false;
  }
  const awsPassword = response.Item.password;

  if (awsPassword === password) {
    return true;
  } else return false;


}