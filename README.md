# Publishes a given docker image
Action to push a built docker image to a docker registry

## Usage
## Example Pipeline
```yaml
name: Example Job
on: [push]
jobs:
  - name: build image
        run: docker build -t example-name .
 - name: Publish to Registry
        with:
          name: example-name
          username: ${{ secrets.DOCKER_REG_USERNAME }}
          password: ${{ secrets.DOCKER_REG_PASSWORD }}
          registry: registry.example.abc
        uses: ambimax/action-docker-push@X.X.X

```
## Mandatory Arguments
`name` of the build image to push
`password` the password for the registry
`username` the username for the registry
`registry` is the name of the registry you would like to push to