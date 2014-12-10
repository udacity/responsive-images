#!/bin/sh

SRC="$1"
LOW=60
convert $SRC.jpg -quality $LOW low_$SRC.jpg
convert $SRC.jpg -quality $LOW low_$SRC.webp
convert $SRC.jpg -quality $LOW -resize 50% "$SRC"_"$LOW"q_50pc.jpg
convert $SRC.jpg -quality $LOW -resize 50% "$SRC"_"$LOW"q_50pc.webp
