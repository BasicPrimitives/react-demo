#!/usr/bin/env bash

gunzip -c demo.tar.gz | docker load

docker run -d --name bp_nginx -p 80:80 -p 443:443 -v /home/ec2-user/letsencrypt:/etc/letsencrypt -v /home/ec2-user/letsencrypt:/etc/nginx/ssl demo:latest
