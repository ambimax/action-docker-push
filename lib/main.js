const cp = require('child_process')
const USERNAME = process.env.INPUT_USERNAME;
const PASSWORD = process.env.INPUT_PASSWORD;
const REGISTRY = process.env.INPUT_REGISTRY;
const NAME = process.env.INPUT_NAME;
const BUILD_ID = process.env.INPUT_ID;

let tag = process.env.GITHUB_REF.replace("refs/heads/", "").replace("/", "-")

if (tag === "master") {
    tag = "latest"
}

tag = BUILD_ID ? tag + BUILD_ID : tag;

cp.execSync(`docker tag ${NAME} ${REGISTRY}/${NAME}:${tag}`)
cp.execSync(`docker login -u ${USERNAME} -p ${PASSWORD} ${REGISTRY}`)
cp.execSync(`docker push ${REGISTRY}/${NAME}:${tag}`)
