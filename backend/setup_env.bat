@echo off
echo Creating isolated virtual environment for the backend...
echo.

REM Check if venv exists
if exist "venv" (
    echo Virtual environment already exists. Removing it...
    rmdir /s /q venv
)

echo Creating new virtual environment...
python -m venv venv

echo.
echo Activating virtual environment...
call venv\Scripts\activate.bat

echo.
echo Upgrading pip...
python -m pip install --upgrade pip

echo.
echo Installing dependencies...
pip install -r requirements.txt

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo To activate the environment in the future, run:
echo   cd backend
echo   venv\Scripts\activate.bat
echo.
echo Then start the server with:
echo   python start.py
echo.
pause
