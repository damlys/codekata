#!/usr/bin/env make

default: container-shell

build-image:
	docker-compose build
setup:
	docker-compose up --detach
container-shell:
	docker-compose exec ansible \
		bash
destroy:
	docker-compose down

run-example-playbook:
	docker-compose exec ansible \
		ansible-playbook hello.yml

fix-file-permissions:
	docker-compose exec ansible \
		chown --recursive $(shell id -u):$(shell id -g) /workspace
