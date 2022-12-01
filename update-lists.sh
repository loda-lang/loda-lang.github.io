#!/bin/bash

src_dir="$HOME/loda/lists"

if ! [ -d "$src_dir" ]; then
  echo "directory not found: $dir"
  exit 1
fi

git pull
cp $src_dir/list*.markdown .
git add list*.markdown
git commit -m "update program lists"
git push
