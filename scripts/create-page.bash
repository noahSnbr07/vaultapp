#!/bin/bash

read -p "Enter the name for the folder: " title

mkdir "$title"

cd "$title" || exit

mkdir components

cat <<EOL > page.tsx
import React from 'react';
import './page.stylesheet.ts';

export default function page() {
 
 return (
 
 );
}

EOL

cat <<EOL > page.stylesheet.ts
const stylesheet: CSSProperties = {};

export default stylesheet;
EOL

echo "$title-page created successfully."