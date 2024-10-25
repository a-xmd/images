#!/bin/bash

rm -rf assets/*

for file in originals/*; do
  name=$(echo "$file" | cut -d '/' -f 2 | cut -d '.' -f 1)
  sizes_4_3=(96 192 288 384 480 576 768 960 1152 1440 1920 2400 2880)

  mkdir ./assets/"$name"

  echo "🖼 Processing $file"

  for size in "${sizes_4_3[@]}"; do
    output=./assets/"$name"/"$size"x$((size / 4 * 3)).avif
    echo creating "$output"

    magick "$file" -resize "$size" "$output"
  done

  printf "\n"

done
