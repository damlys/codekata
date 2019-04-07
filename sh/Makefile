#!/usr/bin/env make

default: container-shell

build-image:
	docker-compose build
setup:
	docker-compose up --detach
container-shell:
	docker-compose exec sh \
		bash
destroy:
	docker-compose down

fix-file-permissions:
	docker-compose exec sh \
		chown --recursive $(shell id -u):$(shell id -g) /workspace
