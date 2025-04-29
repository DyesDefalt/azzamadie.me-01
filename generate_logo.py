import math

def generate_svg_logo(filename):
    # Define colors based on the updated palette (approximated hex for SVG)
    dark_blue = "#1A2A4A"  # hsl(222, 70%, 15%)
    bright_blue = "#3B82F6" # hsl(217, 91%, 60%)
    light_accent_blue = "#60A5FA" # hsl(200, 86%, 66%)
    off_white = "#F8FAFC" # hsl(210, 40%, 98%)

    # SVG dimensions
    width = 200
    height = 200
    cx = width / 2
    cy = height / 2
    radius = 90

    # Golden ratio approx
    phi = 1.618

    svg_content = f'''<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:{dark_blue};stop-opacity:1" />
            <stop offset="100%" style="stop-color:{bright_blue};stop-opacity:0.8" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>

    <!-- Background Circle with Gradient -->
    <circle cx="{cx}" cy="{cy}" r="{radius}" fill="url(#grad1)" />

    <!-- Subtle Arcs inspired by second image (asymmetric) -->
    <path d="M {cx - radius * 0.6}, {cy - radius * 0.6} A {radius * 0.8} {radius * 0.8} 0 0 1 {cx + radius * 0.3}, {cy + radius * 0.7}" stroke="{light_accent_blue}" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M {cx + radius * 0.7}, {cy - radius * 0.4} A {radius * 0.9} {radius * 0.9} 0 0 0 {cx - radius * 0.5}, {cy + radius * 0.5}" stroke="{light_accent_blue}" stroke-width="1.5" fill="none" opacity="0.4"/>
     <path d="M {cx - radius * 0.2}, {cy + radius * 0.8} A {radius * 0.7} {radius * 0.7} 0 0 1 {cx + radius * 0.8}, {cy - radius * 0.1}" stroke="{light_accent_blue}" stroke-width="1" fill="none" opacity="0.3"/>


    <!-- Letter 'A' - slightly offset for asymmetry, using golden ratio concept for position/size -->
    <text x="{cx - 2}" y="{cy + 25}" font-family="Poppins, sans-serif" font-size="{radius * 0.9}" font-weight="bold" fill="{off_white}" text-anchor="middle" filter="url(#glow)">A</text>

</svg>'''

    with open(filename, "w") as f:
        f.write(svg_content)

def generate_favicon(filename):
    dark_blue = "#1A2A4A"
    off_white = "#F8FAFC"
    favicon_cx = 16
    favicon_cy = 16
    favicon_svg_content = f'''<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="4" fill="{dark_blue}"/>
    <text x="{favicon_cx}" y="{favicon_cy + 7}" font-family="Poppins, sans-serif" font-size="20" font-weight="bold" fill="{off_white}" text-anchor="middle">A</text>
</svg>'''
    with open(filename, "w") as f:
        f.write(favicon_svg_content)

# Generate the logo
logo_path = "/home/ubuntu/website_update/updated_site/public/logo.svg"
generate_svg_logo(logo_path)

# Generate a simple favicon based on the logo
favicon_path = "/home/ubuntu/website_update/updated_site/public/favicon.svg"
generate_favicon(favicon_path)

print(f"Generated logo: {logo_path}")
print(f"Generated favicon: {favicon_path}")

