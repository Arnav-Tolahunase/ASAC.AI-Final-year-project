#!/usr/bin/env python3
"""
Test script to verify the backend setup is correct.
"""

import os
import sys

def check_dependencies():
    """Check if all required dependencies are installed."""
    print("Checking dependencies...")
    try:
        import tensorflow as tf
        print(f"✅ TensorFlow {tf.__version__}")
        
        import keras
        print(f"✅ Keras {keras.__version__}")
        
        import numpy as np
        print(f"✅ NumPy {np.__version__}")
        
        import cv2
        print(f"✅ OpenCV {cv2.__version__}")
        
        import fastapi
        print(f"✅ FastAPI {fastapi.__version__}")
        
        from PIL import Image
        print(f"✅ Pillow installed")
        
        import pandas as pd
        print(f"✅ Pandas {pd.__version__}")
        
        return True
    except ImportError as e:
        print(f"❌ Missing dependency: {e}")
        return False

def check_model_file():
    """Check if the model file exists."""
    print("\nChecking for model file...")
    
    model_paths = [
        "../first_try(baseline).h5",
        "../../first_try(baseline).h5",
        "first_try(baseline).h5",
    ]
    
    for path in model_paths:
        if os.path.exists(path):
            print(f"✅ Model file found at: {path}")
            return True
    
    print("❌ Model file 'first_try(baseline).h5' not found!")
    print("   Please place it in one of these locations:")
    for path in model_paths:
        abs_path = os.path.abspath(path)
        print(f"   - {abs_path}")
    return False

def main():
    print("=" * 60)
    print("Backend Setup Verification")
    print("=" * 60)
    print()
    
    deps_ok = check_dependencies()
    model_ok = check_model_file()
    
    print()
    print("=" * 60)
    if deps_ok and model_ok:
        print("✅ All checks passed! You're ready to start the server.")
        print()
        print("To start the backend server, run:")
        print("   python start.py")
    else:
        print("❌ Some checks failed. Please fix the issues above.")
        sys.exit(1)
    print("=" * 60)

if __name__ == "__main__":
    main()
