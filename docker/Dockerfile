FROM php:7.4-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo_mysql

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Copy entrypoint script into the container
COPY ./docker/entrypoint.sh /usr/local/bin/entrypoint.sh

# Set executable permissions for the entrypoint script
RUN chmod +x /usr/local/bin/entrypoint.sh

# Expose port 80
EXPOSE 80

# Run entrypoint script when the container starts
ENTRYPOINT ["entrypoint.sh"]
