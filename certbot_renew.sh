#!/usr/bin/env bash
set -euo pipefail

# Certbot renew runner for Docker-hosted site
# Expects letsencrypt data at /home/ec2-user/letsencrypt and site webroot at /home/ec2-user/site

LE_DIR="/home/ec2-user/letsencrypt"
SITE_DIR="/home/ec2-user/site"
CONTAINER="bp_nginx"
CERTBOT_IMAGE="certbot/certbot:latest"

if [ ! -d "$LE_DIR" ]; then
  echo "Letsencrypt dir not found: $LE_DIR" >&2
  exit 1
fi
if [ ! -d "$SITE_DIR" ]; then
  echo "Site dir not found: $SITE_DIR" >&2
  exit 1
fi

echo "Running certbot renew (webroot)"
docker run --rm -v "$LE_DIR":/etc/letsencrypt -v "$SITE_DIR":/var/www/html "$CERTBOT_IMAGE" renew --webroot -w /var/www/html --quiet || true

# If certs updated, reload nginx (best effort)
if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER}$"; then
  echo "Reloading nginx inside container $CONTAINER"
  docker exec "$CONTAINER" nginx -s reload || true
else
  echo "Container $CONTAINER not running; skipping nginx reload"
fi

exit 0
