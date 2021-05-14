#!/bin/bash
cd /home/ec2-user/server/src
echo start
npm start
echo started
pm2 start npm --name "21-days-challenge-react" -- start
echo beforestartup
pm2 startup
echo beforesave
pm2 save
echo beforerestart
pm2 restart all