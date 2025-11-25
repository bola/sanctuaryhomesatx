#!/bin/bash

# List of files to update (excluding about.html which is already done)
files=(
    "projects.html"
    "methodology.html"
    "difference.html"
    "testimonials.html"
    "contact.html"
    "faq.html"
    "project-detail.html"
    "404.html"
    "privacy.html"
    "terms.html"
)

for file in "${files[@]}"; do
    echo "Processing $file..."

    # Create backup
    cp "$file" "$file.bak"

    # The actual replacement will be done by Claude using Edit commands
    # This script just lists what needs to be done
done

echo "All files backed up. Ready for component conversion."
