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


## Input arguments

| Name | Description|required|
|---|---|---|
| name | The name of the image you would like to push |true|
| username | The login username for the registry |true|
| password | The login password for the registry |true|
| registry | Use registry for pushing to a custom registry |true|
| id | The id to tag the given image with |false|

## Author Information

[Konstantin Bode](https://github.com/BodeSpezial), [ambimax® GmbH](https://ambimax.de)
[Dominik Wißler](https://github.com/Wysselbie), [ambimax® GmbH](https://ambimax.de)
