FROM php:7
USER root
WORKDIR /workspace
ENTRYPOINT []
CMD ["sleep", "infinity"]
HEALTHCHECK NONE

RUN curl -fsSL https://getcomposer.org/installer -o /usr/local/bin/composer-installer \
&& php /usr/local/bin/composer-installer --install-dir=/usr/local/bin --filename=composer \
&& rm /usr/local/bin/composer-installer
ENV COMPOSER_ALLOW_SUPERUSER="1"

RUN apt-get update

RUN apt-get install --yes \
  bash-completion \
  git \
&& apt-get clean \
&& echo ". /etc/bash_completion" >> ~/.bashrc

RUN apt-get install --yes \
  libzip-dev \
  unzip \
  zip \
&& docker-php-ext-install \
  zip

RUN composer global require \
  bamarni/symfony-console-autocomplete \
&& composer clear-cache \
&& echo "$(php ~/.composer/vendor/bin/symfony-autocomplete --shell bash composer)" > /etc/bash_completion.d/composer

RUN pecl install \
  xdebug \
&& pecl clear-cache \
&& docker-php-ext-enable \
  xdebug

ENV XDEBUG_REMOTE_AUTOSTART="off"
ENV XDEBUG_REMOTE_HOST="127.0.0.1"
ENV XDEBUG_REMOTE_PORT="9000"
ENV XDEBUG_IDE_KEY="DOCKER"
COPY etc/php.ini /usr/local/etc/php/conf.d/zzz-php.ini
COPY etc/xdebug.ini /usr/local/etc/php/conf.d/zzz-xdebug.ini
