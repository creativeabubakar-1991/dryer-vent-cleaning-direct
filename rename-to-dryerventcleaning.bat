@echo off
echo ========================================================
echo  Renaming Folder to dryer-vent-cleaning-direct
echo ========================================================
echo.
echo 1. Closing local Next.js node server...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo 2. Renaming D:\EV charger Repair to D:\dryer-vent-cleaning-direct...
cd /d D:\
ren "EV charger Repair" "dryer-vent-cleaning-direct"

if exist "D:\dryer-vent-cleaning-direct" (
    echo.
    echo SUCCESS! Folder successfully renamed to:
    echo D:\dryer-vent-cleaning-direct
) else (
    echo.
    echo NOTE: If access is denied, please close your VS Code / Antigravity IDE
    echo and run this batch script again, or right-click and rename in Windows Explorer.
)
echo.
pause
