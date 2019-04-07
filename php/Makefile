#!/usr/bin/env make

default: container-shell

build-image:
	docker-compose build
setup:
	docker-compose up --detach
	docker-compose exec php \
		composer install
container-shell:
	docker-compose exec php \
		bash
destroy:
	docker-compose down

fix-file-permissions:
	docker-compose exec php \
		chown --recursive $(shell id -u):$(shell id -g) /workspace
