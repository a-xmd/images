#!/bin/bash

rm -rf ./public/images/*

for file in originals/*; do
  name=$(echo "$file" | cut -d '/' -f 2 | cut -d '.' -f 1)
  out_dir=./public/images/"$name"
  sizes_4_3=(96 192 288 384 480 576 768 960 1152 1440 1920 2400 2880)

  mkdir -p "$out_dir"

  echo "🖼 Processing $file"

  for size in "${sizes_4_3[@]}"; do
    output="$out_dir"/"$size"x$((size / 4 * 3)).avif
    echo creating "$output"

    magick "$file" -resize "$size" "$output"
  done

  printf "\n"

done
