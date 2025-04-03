@echo off
echo React Dashboard GitHub Push Helper
echo ================================
echo.

echo Step 1: Configuring Git...
git config --global user.name "umeshhpatil"
git config --global user.email "your-email@example.com"
echo.

echo Step 2: Creating repository...
echo Please go to https://github.com/new in your browser
echo Create a new repository named "react-dashboard"
echo Make it public
echo DO NOT initialize it with README or any files
echo.
echo Press any key when you have created the repository...
pause > nul

echo Step 3: Setting up remote...
git remote set-url origin https://github.com/umeshhpatil/react-dashboard.git
echo.

echo Step 4: Adding files...
git add .
echo.

echo Step 5: Committing changes...
git commit -m "Initial commit: React Dashboard" --allow-empty
echo.

echo Step 6: Pushing to GitHub...
git push -u origin master
echo.

echo If you see any authentication errors, you'll need to:
echo 1. Go to https://github.com/settings/tokens
echo 2. Click "Generate new token"
echo 3. Give it a name like "React Dashboard"
echo 4. Select "repo" permissions
echo 5. Click "Generate token"
echo 6. Use that token as your password when prompted
echo.

echo Process complete!
echo Check your repository at https://github.com/umeshhpatil/react-dashboard
echo.

pause 