FN_NAME="DisappointedParents"

ARN=$(aws lambda list-functions | jq -crM ".Functions[] | { name: .FunctionName, arn: .FunctionArn } | select(.name == \"${FN_NAME}\") | .arn")

echo "ARN:"
echo "${ARN}"
echo aws lambda update-function-code \
     --function-name "${ARN}" \
     --zip-file fileb://automation/artifact.zip