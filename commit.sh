#!/bin/bash

echo -e "input commit msg: c"
read
git init
git add .
git commit -m "correct: $REPLY"
git push origin master
