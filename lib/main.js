const cp = require('child_process')
const USERNAME = process.env.INPUT_USERNAME;
const PASSWORD = process.env.INPUT_PASSWORD;
const REGISTRY = process.env.INPUT_REGISTRY;
const NAME = process.env.INPUT_NAME;

let tag = process.env.INPUT_ID;

cp.execSync(`docker tag ${NAME} ${REGISTRY}/${NAME}:${tag}`)
cp.execSync(`docker login -u ${USERNAME} -p ${PASSWORD} ${REGISTRY}`)
cp.execSync(`docker push ${REGISTRY}/${NAME}:${tag}`)
