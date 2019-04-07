FROM ubuntu:latest
USER root
WORKDIR /workspace
ENTRYPOINT []
CMD ["sleep", "infinity"]
HEALTHCHECK NONE

RUN apt-get update

RUN apt-get install --yes \
  bash-completion \
&& apt-get clean \
&& echo ". /etc/bash_completion" >> ~/.bashrc
