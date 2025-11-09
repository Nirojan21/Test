# PowerShell script to add await to all database calls
$files = @(
    "app\api\menu\route.ts",
    "app\api\content\services\route.ts",
    "app\api\content\team\route.ts",
    "app\api\content\projects\route.ts",
    "app\api\content\blog\route.ts",
    "app\api\content\hero\route.ts",
    "app\api\content\about\route.ts",
    "app\api\content\statistics\route.ts",
    "app\api\content\footer\route.ts",
    "app\api\content\clients\route.ts"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content -replace '(\s+)(const \w+ = )db\.(get|create|update|delete|set)(\w+)\(', '$1$2await db.$3$4('
        Set-Content $file $content
        Write-Host "Fixed: $file"
    }
}

Write-Host "Done!"


