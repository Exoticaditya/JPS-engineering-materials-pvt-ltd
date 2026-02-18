# update_pages.ps1 - Update all JPS pages with new navbar and theme

$pages = @{
    "about.html"          = "about"
    "applications.html"   = "applications"
    "certificates.html"   = "certificates"
    "contact.html"        = "contact"
    "distributor.html"    = ""
    "gallery.html"        = "gallery"
    "infrastructure.html" = "infrastructure"
    "products.html"       = "products"
    "services.html"       = "services"
}

$oldFont = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">'
$newFont = '<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">'

$oldScrollJS = @'
        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(11, 17, 32, 0.95)';
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(11, 17, 32, 0.85)';
                navbar.style.boxShadow = 'none';
            }
        });
'@

$newScrollJS = @'
        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 60) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
'@

$oldHamburgerJS = @'
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
'@

$newHamburgerJS = @'
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
        const moreDropdown = document.getElementById('moreDropdown');
        if (moreDropdown) {
            moreDropdown.querySelector('.nav-link').addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    moreDropdown.classList.toggle('open');
                }
            });
        }
'@

foreach ($file in $pages.Keys) {
    $path = "c:\JPS\$file"
    if (-not (Test-Path $path)) { Write-Host "SKIP (not found): $file"; continue }

    $activeKey = $pages[$file]
    $content = Get-Content $path -Raw -Encoding UTF8

    # 1. Update font
    $content = $content -replace [regex]::Escape('<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">'), $newFont

    # Also handle single-line variant
    $content = $content -replace '<link href="https://fonts\.googleapis\.com/css2\?family=Outfit[^"]*" rel="stylesheet">', $newFont

    # 2. Build new navbar with correct active link
    $navLinks = @(
        @{ href="index.html";          label="Home";           key="home" }
        @{ href="about.html";          label="About";          key="about" }
        @{ href="products.html";       label="Products";       key="products" }
        @{ href="infrastructure.html"; label="Infrastructure"; key="infrastructure" }
        @{ href="applications.html";   label="Applications";   key="applications" }
    )

    $liItems = ""
    foreach ($link in $navLinks) {
        $activeClass = if ($link.key -eq $activeKey) { " active" } else { "" }
        $liItems += "                <li><a href=`"$($link.href)`" class=`"nav-link$activeClass`">$($link.label)</a></li>`r`n"
    }

    $newNav = @"
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="assets/images/jps logo.png" alt="JPS Engineering Logo">
            </a>

            <ul class="nav-menu" id="navMenu">
$($liItems.TrimEnd())
                <li class="dropdown" id="moreDropdown">
                    <a href="#" class="nav-link">More <i class="fa-solid fa-chevron-down" style="font-size:0.7em; margin-left:4px;"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="gallery.html"><i class="fa-solid fa-images" style="margin-right:8px; color:var(--primary);"></i>Gallery</a></li>
                        <li><a href="certificates.html"><i class="fa-solid fa-certificate" style="margin-right:8px; color:var(--primary);"></i>Certificates</a></li>
                        <li><a href="contact.html"><i class="fa-solid fa-envelope" style="margin-right:8px; color:var(--primary);"></i>Contact Us</a></li>
                    </ul>
                </li>
                <li><a href="contact.html" class="nav-link nav-cta">Get a Quote</a></li>
            </ul>

            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
"@

    # Replace old navbar block
    $content = $content -replace '(?s)    <!-- Navigation -->.*?</nav>', $newNav.TrimEnd()

    # 3. Update hamburger JS
    $content = $content -replace '(?s)        const hamburger = document\.querySelector\(''.hamburger''\);.*?hamburger\.classList\.toggle\(''active''\);.*?\}\);', $newHamburgerJS.Trim()

    # 4. Update scroll JS
    $content = $content -replace '(?s)        // Navbar Scroll Effect.*?navbar\.style\.boxShadow = ''none'';\s*\}\s*\}\);', $newScrollJS.Trim()

    # Save
    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
    Write-Host "UPDATED: $file"
}

Write-Host "`nAll pages updated!"
