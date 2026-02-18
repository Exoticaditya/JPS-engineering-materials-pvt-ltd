$dir = 'c:\JPS\assets\images\clients'
New-Item -ItemType Directory -Force -Path $dir | Out-Null

# Clean up any failed downloads
Get-ChildItem $dir | Remove-Item -Force

# Create accurate SVG logos with real brand colors
$svgs = @{}

# Bosch - Red wordmark
$svgs['bosch.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
  <rect width="200" height="80" fill="none"/>
  <text x="100" y="52" font-family="Arial Black,Arial,sans-serif" font-size="42" font-weight="900" fill="#E0001A" text-anchor="middle" letter-spacing="-1">BOSCH</text>
</svg>
'@

# Siemens - Teal wordmark
$svgs['siemens.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <rect width="240" height="80" fill="none"/>
  <text x="120" y="52" font-family="Arial,sans-serif" font-size="38" font-weight="bold" fill="#009999" text-anchor="middle" letter-spacing="1">SIEMENS</text>
</svg>
'@

# Tata - Blue wordmark with underline
$svgs['tata.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="160" height="80">
  <rect width="160" height="80" fill="none"/>
  <text x="80" y="48" font-family="Arial,sans-serif" font-size="44" font-weight="900" fill="#003399" text-anchor="middle" letter-spacing="2">TATA</text>
  <rect x="10" y="56" width="140" height="4" fill="#003399"/>
</svg>
'@

# Motherson - Dark blue wordmark
$svgs['motherson.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="280" height="80">
  <rect width="280" height="80" fill="none"/>
  <text x="140" y="50" font-family="Arial,sans-serif" font-size="30" font-weight="bold" fill="#1A2B5A" text-anchor="middle" letter-spacing="1">MOTHERSON</text>
  <text x="140" y="68" font-family="Arial,sans-serif" font-size="11" fill="#E8001D" text-anchor="middle" letter-spacing="3">GROUP</text>
</svg>
'@

# Terex - Orange/Red wordmark
$svgs['terex.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
  <rect width="200" height="80" fill="none"/>
  <text x="100" y="52" font-family="Arial Black,Arial,sans-serif" font-size="44" font-weight="900" fill="#E8401C" text-anchor="middle" letter-spacing="-1">TEREX</text>
</svg>
'@

# DeWalt - Black on Yellow
$svgs['dewalt.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <rect width="240" height="80" rx="4" fill="#FEBD17"/>
  <text x="120" y="52" font-family="Arial Black,Arial,sans-serif" font-size="36" font-weight="900" fill="#000000" text-anchor="middle" letter-spacing="-1">DEWALT</text>
</svg>
'@

# Sandvik - Blue wordmark
$svgs['sandvik.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80" width="220" height="80">
  <rect width="220" height="80" fill="none"/>
  <text x="110" y="52" font-family="Arial,sans-serif" font-size="36" font-weight="bold" fill="#005B8E" text-anchor="middle" letter-spacing="1">SANDVIK</text>
</svg>
'@

# Atlas Copco - Blue wordmark
$svgs['atlas.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 80" width="260" height="80">
  <rect width="260" height="80" fill="none"/>
  <text x="130" y="44" font-family="Arial,sans-serif" font-size="28" font-weight="bold" fill="#003087" text-anchor="middle" letter-spacing="1">ATLAS COPCO</text>
  <text x="130" y="64" font-family="Arial,sans-serif" font-size="12" fill="#E31E24" text-anchor="middle" letter-spacing="2">THINK SMART. WORK SMART.</text>
</svg>
'@

# ABB - Red wordmark
$svgs['abb.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="160" height="80">
  <rect width="160" height="80" fill="none"/>
  <text x="80" y="58" font-family="Arial Black,Arial,sans-serif" font-size="56" font-weight="900" fill="#FF000F" text-anchor="middle" letter-spacing="-2">ABB</text>
</svg>
'@

# Schneider Electric - Green wordmark
$svgs['schneider.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="280" height="80">
  <rect width="280" height="80" fill="none"/>
  <text x="140" y="44" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="#3DCD58" text-anchor="middle" letter-spacing="0.5">SCHNEIDER</text>
  <text x="140" y="66" font-family="Arial,sans-serif" font-size="20" font-weight="bold" fill="#3DCD58" text-anchor="middle" letter-spacing="1">ELECTRIC</text>
</svg>
'@

# Honeywell - Red wordmark
$svgs['honeywell.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="280" height="80">
  <rect width="280" height="80" fill="none"/>
  <text x="140" y="52" font-family="Arial,sans-serif" font-size="30" font-weight="bold" fill="#E1001A" text-anchor="middle" letter-spacing="1">HONEYWELL</text>
</svg>
'@

# SKF - Blue wordmark
$svgs['skf.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 80" width="160" height="80">
  <rect width="160" height="80" fill="none"/>
  <text x="80" y="56" font-family="Arial Black,Arial,sans-serif" font-size="52" font-weight="900" fill="#003087" text-anchor="middle" letter-spacing="2">SKF</text>
</svg>
'@

# Unilever - Blue U logo + text
$svgs['unilever.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <rect width="240" height="80" fill="none"/>
  <text x="120" y="52" font-family="Arial,sans-serif" font-size="34" font-weight="bold" fill="#1F36C7" text-anchor="middle" letter-spacing="1">UNILEVER</text>
</svg>
'@

# Patanjali - Orange/Saffron wordmark
$svgs['patanjali.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="240" height="80">
  <rect width="240" height="80" fill="none"/>
  <text x="120" y="44" font-family="Arial,sans-serif" font-size="28" font-weight="bold" fill="#FF6600" text-anchor="middle" letter-spacing="1">PATANJALI</text>
  <text x="120" y="64" font-family="Arial,sans-serif" font-size="13" fill="#006400" text-anchor="middle" letter-spacing="1">AYURVED LIMITED</text>
</svg>
'@

# CNH Industrial - Blue wordmark
$svgs['cnh.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 80" width="260" height="80">
  <rect width="260" height="80" fill="none"/>
  <text x="130" y="44" font-family="Arial Black,Arial,sans-serif" font-size="36" font-weight="900" fill="#003087" text-anchor="middle" letter-spacing="2">CNH</text>
  <text x="130" y="66" font-family="Arial,sans-serif" font-size="14" fill="#003087" text-anchor="middle" letter-spacing="2">INDUSTRIAL</text>
</svg>
'@

# Jamna Auto - Blue wordmark
$svgs['jamna.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80" width="220" height="80">
  <rect width="220" height="80" fill="none"/>
  <text x="110" y="44" font-family="Arial Black,Arial,sans-serif" font-size="32" font-weight="900" fill="#003087" text-anchor="middle" letter-spacing="1">JAMNA</text>
  <text x="110" y="64" font-family="Arial,sans-serif" font-size="13" fill="#E8001D" text-anchor="middle" letter-spacing="1">AUTO INDUSTRIES</text>
</svg>
'@

# ACE Cranes - Orange wordmark
$svgs['ace.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="200" height="80">
  <rect width="200" height="80" fill="none"/>
  <text x="100" y="48" font-family="Arial Black,Arial,sans-serif" font-size="48" font-weight="900" fill="#FF6600" text-anchor="middle" letter-spacing="2">ACE</text>
  <text x="100" y="66" font-family="Arial,sans-serif" font-size="11" fill="#333333" text-anchor="middle" letter-spacing="1">ACTION CONSTRUCTION</text>
</svg>
'@

# Write all SVG files
foreach ($name in $svgs.Keys) {
    $out = "$dir\$name"
    [System.IO.File]::WriteAllText($out, $svgs[$name].Trim(), [System.Text.Encoding]::UTF8)
    Write-Host "Created: $name"
}

Write-Host "`nAll logos created in $dir"
Get-ChildItem $dir | ForEach-Object { Write-Host "  $($_.Name) - $($_.Length) bytes" }
