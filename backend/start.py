#!/usr/bin/env python3
"""
Startup script for the Media Integrity Checker FastAPI backend.
"""

import os
import sys
import subprocess
from pathlib import Path

def check_model_file():
    """Check if the model file exists."""
    model_path = Path("../first_try(baseline).h5")
    if not model_path.exists():
        print("ERROR: Model file 'first_try(baseline).h5' not found!")
        print("Please ensure the model file is in the project root directory.")
        return False
    print("SUCCESS: Model file found")
    return True

def check_dependencies():
    """Check if required dependencies are installed."""
    try:
        import tensorflow
        import fastapi
        import uvicorn
        import numpy
        import cv2
        from PIL import Image
        print("SUCCESS: All dependencies are installed")
        return True
    except ImportError as e:
        print(f"ERROR: Missing dependency: {e}")
        print("Please install dependencies with: pip install -r requirements.txt")
        return False

def main():
    print("Starting Media Integrity Checker Backend...")
    
    if not check_model_file():
        sys.exit(1)
    
    if not check_dependencies():
        sys.exit(1)
    
    print("Starting FastAPI server...")
    print("Backend will be available at: http://localhost:8000")
    print("API docs will be available at: http://localhost:8000/docs")
    print("Press Ctrl+C to stop the server")
    
    try:
        import uvicorn
        uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
    except KeyboardInterrupt:
        print("\nServer stopped")
    except Exception as e:
        print(f"Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()