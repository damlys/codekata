FROM node:slim
USER root
WORKDIR /workspace
ENTRYPOINT []
CMD ["sleep", "infinity"]
HEALTHCHECK NONE

RUN apt-get update

RUN apt-get install --yes \
  bash-completion \
  git \
&& apt-get clean \
&& echo ". /etc/bash_completion" >> ~/.bashrc

RUN npm completion > /etc/bash_completion.d/npm \
&& npm config set --global unsafe-perm=true \
&& npm config set --global update-notifier=false

RUN npm install --global \
  typescript \
&& npm cache clean --force
