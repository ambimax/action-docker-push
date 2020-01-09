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
          id: image-tag-to-use
        uses: ambimax/action-docker-push@X.X.X
```


## Mandatory Inputs

| Name | Description|
|-|-|
| name | The name of the image you would like to push |
| username | The login username for the registry |
| password | The login password for the registry |
| registry | Use registry for pushing to a custom registry |
| id | The id to tag the given image with |

## Author Information

[Konstantin Bode](https://github.com/BodeSpezial), [ambimax® GmbH](https://ambimax.de)
