@echo off
echo Upgrading pip...
python -m pip install --upgrade pip

echo.
echo Installing dependencies...
pip install --use-feature=2020-resolver -r requirements.txt

echo.
echo Installation complete!
pause
