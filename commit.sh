#!/bin/bash

read tite
git init
git add .
git commit -m "correct: $title"
git push origin master
