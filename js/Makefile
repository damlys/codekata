#!/usr/bin/env make

default: container-shell

build-image:
	docker-compose build
setup:
	docker-compose up --detach
	docker-compose exec js \
		npm install
container-shell:
	docker-compose exec js \
		bash
destroy:
	docker-compose down

fix-file-permissions:
	docker-compose exec js \
		chown --recursive $(shell id -u):$(shell id -g) /workspace
