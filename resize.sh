#!/bin/bash

rm -rf ./public/images/*

for file in originals/*; do
  name=$(echo "$file" | cut -d '/' -f 2 | cut -d '.' -f 1)
  out_dir=./public/images/"$name"
  sizes_4_3=(96 192 288 384 480 576 768 960 1152 1440 1920 2400 2880)

  mkdir -p "$out_dir"

  echo "🖼 Processing $file"

  for size in "${sizes_4_3[@]}"; do
    output_avif="$out_dir"/"$size"x$((size / 4 * 3)).avif
    output_jpeg="$out_dir"/"$size"x$((size / 4 * 3)).jpeg

    echo creating "$output_avif"
    magick "$file" -resize "$size" "$output_avif"

    echo creating "$output_jpeg"
    magick "$file" -resize "$size" "$output_jpeg"
  done

  printf "\n"

done
