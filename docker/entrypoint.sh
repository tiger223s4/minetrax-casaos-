#!/bin/bash
set -e

# Function to wait for MySQL to be ready
wait_for_mysql() {
    until mysql -h"$DB_HOST" -uroot -p"$MYSQL_ROOT_PASSWORD" -e 'SELECT 1'; do
        >&2 echo "MySQL is unavailable - sleeping"
        sleep 1
    done
    >&2 echo "MySQL is up and running!"
}

# Function to install .env file if not exists
install_env() {
    ENV_FILE="/var/www/html/.env"
    if [ ! -f "$ENV_FILE" ]; then
        cp /var/www/html/.env.example "$ENV_FILE"
        >&2 echo ".env file installed successfully"
    else
        >&2 echo ".env file already exists"
    fi
}

# Function to configure .env file
configure_env() {
    sed -i "s/DB_HOST=.*/DB_HOST=${DB_HOST}/" /var/www/html/.env
    sed -i "s/DB_DATABASE=.*/DB_DATABASE=${DB_DATABASE}/" /var/www/html/.env
    sed -i "s/DB_USERNAME=.*/DB_USERNAME=${DB_USERNAME}/" /var/www/html/.env
    sed -i "s/DB_PASSWORD=.*/DB_PASSWORD=${DB_PASSWORD}/" /var/www/html/.env
    >&2 echo ".env file configured successfully"
}

# Main function
main() {
    # Wait for MySQL to be ready
    wait_for_mysql

    # Install .env file if not exists
    install_env

    # Configure .env file
    configure_env

    # Start Apache
    exec apache2-foreground
}

main "$@"
