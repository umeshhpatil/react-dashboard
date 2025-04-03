# PowerShell script to push dashboard project to GitHub
# Run this script in PowerShell with your own values

# Set these variables
$github_username = "YOUR_USERNAME"  # Replace with your GitHub username
$repository_name = "react-dashboard" # Replace with your repository name

# Clear screen
Clear-Host

Write-Host "Starting GitHub push process..." -ForegroundColor Green
Write-Host "Make sure you've already created an empty repository named $repository_name on GitHub" -ForegroundColor Yellow
Write-Host ""

# Initialize Git repository
Write-Host "Initializing Git repository..." -ForegroundColor Cyan
git init
Write-Host "Done!" -ForegroundColor Green
Write-Host ""

# Add all files
Write-Host "Adding files to Git..." -ForegroundColor Cyan
git add .
Write-Host "Done!" -ForegroundColor Green
Write-Host ""

# Commit files
$commit_message = "Initial commit: Dashboard project"
Write-Host "Committing files with message: '$commit_message'..." -ForegroundColor Cyan
git commit -m $commit_message
Write-Host "Done!" -ForegroundColor Green
Write-Host ""

# Add remote
$remote_url = "https://github.com/$github_username/$repository_name.git"
Write-Host "Adding remote repository: $remote_url" -ForegroundColor Cyan
git remote add origin $remote_url
Write-Host "Done!" -ForegroundColor Green
Write-Host ""

# Determine default branch name
$branch_name = git branch --show-current
if (-not $branch_name) {
    $branch_name = "main"
}

# Push to GitHub
Write-Host "Pushing to GitHub on branch '$branch_name'..." -ForegroundColor Cyan
git push -u origin $branch_name

Write-Host ""
Write-Host "Process completed!" -ForegroundColor Green
Write-Host "Visit https://github.com/$github_username/$repository_name to view your repository." -ForegroundColor Cyan
Write-Host ""
Write-Host "Note: If you encountered authentication issues, you may need to set up a personal access token." -ForegroundColor Yellow
Write-Host "See: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" -ForegroundColor Yellow 