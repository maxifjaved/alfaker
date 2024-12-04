#!/bin/bash

# setup.sh
LOG_DIR="$HOME/Library/Logs"
LOG_FILE="$LOG_DIR/alfaker.log"

# Create logs directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Create log file if it doesn't exist
touch "$LOG_FILE"

# Set proper permissions
chmod 644 "$LOG_FILE"

# Add initial log entry
echo "$(date): Alfaker workflow initialized" >> "$LOG_FILE"

echo "Setup complete. Log file created at: $LOG_FILE"