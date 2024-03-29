const cp = require("child_process")
const USERNAME = process.env.INPUT_USERNAME;
const PASSWORD = process.env.INPUT_PASSWORD;
const REGISTRY = process.env.INPUT_REGISTRY;
const NAME = process.env.INPUT_NAME;

let tag = process.env.INPUT_ID;

cp.execSync(`docker login -u ${USERNAME} -p ${PASSWORD} ${REGISTRY}`);

if (tag) {
    cp.execSync(`docker tag ${NAME} ${REGISTRY}/${NAME}:${tag}`);
}

console.log(`Image: ${NAME}`);
console.log(`Registry: ${REGISTRY}`);
console.log("Tags:");
cp.execSync(`docker images ${NAME} --format="{{ .Tag }}"`);
cp.execSync(`docker images ${REGISTRY}/${NAME} --format="{{ .Tag }}"`);

console.log("Pushing...");
cp.execSync(`docker push --all-tags ${REGISTRY}/${NAME}`);
