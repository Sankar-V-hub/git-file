#!/usr/bin/env python3
"""
Fast Professional Image Generator with Fallback
Uses optimized gradients with professional overlays
"""

from PIL import Image, ImageDraw, ImageFont
import os

os.makedirs("public/work", exist_ok=True)
os.makedirs("public/blog", exist_ok=True)

# Professional color schemes for each category
color_schemes = {
    "ecommerce-ai-platform": {
        "colors": [(20, 100, 180), (41, 128, 185)],
        "pattern": "tech"
    },
    "brand-identity-system": {
        "colors": [(155, 89, 182), (241, 196, 15)],
        "pattern": "design"
    },
    "social-media-viral-campaign": {
        "colors": [(46, 204, 113), (52, 152, 219)],
        "pattern": "social"
    },
    "mobile-app-ui-ux": {
        "colors": [(231, 76, 60), (236, 112, 99)],
        "pattern": "mobile"
    },
    "sustainable-packaging-design": {
        "colors": [(39, 174, 96), (46, 213, 115)],
        "pattern": "package"
    },
    "enterprise-website-redesign": {
        "colors": [(52, 73, 94), (176, 190, 197)],
        "pattern": "corporate"
    },
    "ai-marketing-future": {
        "colors": [(44, 62, 80), (52, 152, 219)],
        "pattern": "ai"
    },
    "seo-trends-2025": {
        "colors": [(46, 204, 113), (26, 188, 156)],
        "pattern": "analytics"
    },
    "social-media-roi": {
        "colors": [(230, 126, 34), (231, 76, 60)],
        "pattern": "metrics"
    },
    "personal-branding": {
        "colors": [(155, 89, 182), (142, 68, 173)],
        "pattern": "personal"
    },
    "content-strategy-10x": {
        "colors": [(52, 152, 219), (41, 128, 185)],
        "pattern": "content"
    },
    "design-psychology": {
        "colors": [(241, 196, 15), (230, 126, 34)],
        "pattern": "design"
    }
}

def create_professional_image(width, height, title, colors, pattern):
    """Create professional image with gradients and patterns"""
    # Create base gradient
    img = Image.new('RGB', (width, height), colors[0])
    pixels = img.load()
    
    # Apply smooth gradient
    for y in range(height):
        ratio = y / height
        r = int(colors[0][0] * (1 - ratio) + colors[1][0] * ratio)
        g = int(colors[0][1] * (1 - ratio) + colors[1][1] * ratio)
        b = int(colors[0][2] * (1 - ratio) + colors[1][2] * ratio)
        for x in range(width):
            pixels[x, y] = (r, g, b)
    
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Add pattern overlay based on type
    if pattern == "tech":
        # Tech pattern - diagonal lines
        for i in range(0, width + height, 50):
            draw.line([(i, 0), (i - height, height)], fill=(255, 255, 255, 15), width=1)
    elif pattern == "design":
        # Design pattern - geometric circles
        for y in range(0, height, 100):
            for x in range(0, width, 100):
                draw.ellipse([x, y, x+60, y+60], fill=(255, 255, 255, 10))
    elif pattern == "social":
        # Social pattern - dots
        for y in range(0, height, 80):
            for x in range(0, width, 80):
                draw.ellipse([x, y, x+20, y+20], fill=(255, 255, 255, 20))
    elif pattern == "mobile":
        # Mobile pattern - grid
        for i in range(0, width, 40):
            draw.line([(i, 0), (i, height)], fill=(255, 255, 255, 8), width=1)
        for i in range(0, height, 40):
            draw.line([(0, i), (width, i)], fill=(255, 255, 255, 8), width=1)
    elif pattern == "analytics":
        # Analytics - bars
        for i in range(0, width, 60):
            h = (i * 3) % height
            draw.rectangle([i, height - h, i + 30, height], fill=(255, 255, 255, 15))
    elif pattern == "ai":
        # AI pattern - connected nodes
        for i in range(0, width, 120):
            for j in range(0, height, 120):
                draw.ellipse([i-10, j-10, i+10, j+10], fill=(255, 255, 255, 25))
                if i + 120 < width:
                    draw.line([(i, j), (i+120, j)], fill=(255, 255, 255, 12), width=1)
    
    # Add dark overlay for text readability
    overlay = Image.new('RGBA', (width, height), (0, 0, 0, 90))
    img.paste(overlay, (0, 0), overlay)
    
    # Add title
    try:
        font_size = int(width / 15)
        font = ImageFont.truetype("arial.ttf", font_size)
        font_small = ImageFont.truetype("arial.ttf", int(font_size / 2.5))
    except:
        font = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Center title
    bbox = draw.textbbox((0, 0), title, font=font)
    title_width = bbox[2] - bbox[0]
    x = (width - title_width) // 2
    y = (height // 2) - int(font_size / 2)
    
    draw.text((x, y), title, font=font, fill=(255, 255, 255, 255))
    
    # Add subtitle
    subtitle = "Premium Design • Web Optimized"
    bbox_sub = draw.textbbox((0, 0), subtitle, font=font_small)
    sub_width = bbox_sub[2] - bbox_sub[0]
    x_sub = (width - sub_width) // 2
    
    draw.text((x_sub, y + int(font_size * 1.2)), subtitle, font=font_small, fill=(200, 200, 200, 220))
    
    return img

def generate_work_images():
    """Generate all work project images"""
    work_items = [
        ("ecommerce-ai-platform", "E-Commerce AI", 800, 600),
        ("brand-identity-system", "Brand Identity", 800, 600),
        ("social-media-viral-campaign", "Social Media", 800, 600),
        ("mobile-app-ui-ux", "Mobile UI/UX", 800, 600),
        ("sustainable-packaging-design", "Packaging", 800, 600),
        ("enterprise-website-redesign", "Corporate Web", 800, 600),
    ]
    
    for name, title, w, h in work_items:
        config = color_schemes[name]
        img = create_professional_image(w, h, title, config["colors"], config["pattern"])
        path = f"public/work/{name}.jpg"
        img.save(path, 'JPEG', quality=92, optimize=True)
        size = os.path.getsize(path) / 1024
        print(f"✅ {name:40} ({size:6.1f} KB)")

def generate_blog_images():
    """Generate all blog post images"""
    blog_items = [
        ("ai-marketing-future", "AI Marketing", 1200, 630),
        ("seo-trends-2025", "SEO Trends 2025", 1200, 630),
        ("social-media-roi", "Social ROI", 1200, 630),
        ("personal-branding", "Personal Brand", 1200, 630),
        ("content-strategy-10x", "Content 10x", 1200, 630),
        ("design-psychology", "Design Psychology", 1200, 630),
    ]
    
    for name, title, w, h in blog_items:
        config = color_schemes[name]
        img = create_professional_image(w, h, title, config["colors"], config["pattern"])
        path = f"public/blog/{name}.jpg"
        img.save(path, 'JPEG', quality=92, optimize=True)
        size = os.path.getsize(path) / 1024
        print(f"✅ {name:40} ({size:6.1f} KB)")

def main():
    print("\n" + "="*70)
    print("🎨 Professional Web-Optimized Image Generator")
    print("="*70 + "\n")
    
    print("📊 Generating Work Project Images (800x600)...")
    print("-"*70)
    generate_work_images()
    
    print("\n📰 Generating Blog Post Images (1200x630)...")
    print("-"*70)
    generate_blog_images()
    
    print("\n" + "="*70)
    print("✨ All professional images generated successfully!")
    print("="*70)
    print("\n📊 Summary:")
    print("   • Work Projects: 6 images (800×600)")
    print("   • Blog Posts: 6 images (1200×630)")
    print("   • Format: JPEG (92% quality)")
    print("   • Optimization: Maximum compression for web")
    print("   • Location: public/work/ & public/blog/")
    print("\n🚀 Optimized for:")
    print("   ✓ Fast page load times")
    print("   ✓ Mobile responsiveness")
    print("   ✓ Professional appearance")
    print("   ✓ SEO & accessibility")
    print()

if __name__ == "__main__":
    main()
