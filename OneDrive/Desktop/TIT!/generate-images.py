#!/usr/bin/env python3
"""
Premium Image Generator for TIT Website
Generates beautiful, professional images for Work and Blog pages
"""

from PIL import Image, ImageDraw, ImageFilter, ImageFont
import os
import json
from datetime import datetime

# Create directories if they don't exist
os.makedirs("public/work", exist_ok=True)
os.makedirs("public/blog", exist_ok=True)

# Color palette for professional designs
COLORS = {
    "primary": "#2563eb",  # Blue
    "primary_light": "#60a5fa",
    "secondary": "#1e293b",  # Dark slate
    "accent": "#8b5cf6",  # Purple
    "gradient1": "#0f172a",  # Dark blue
    "gradient2": "#1e3a8a",  # Deep blue
    "text_light": "#f1f5f9",
    "text_muted": "#94a3b8",
}

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_gradient_background(width, height, color1, color2):
    """Create a gradient background image"""
    img = Image.new('RGB', (width, height))
    pixels = img.load()
    
    c1 = hex_to_rgb(color1)
    c2 = hex_to_rgb(color2)
    
    for y in range(height):
        ratio = y / height
        r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
        g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
        b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
        
        for x in range(width):
            pixels[x, y] = (r, g, b)
    
    return img

def add_overlay_shape(img, shape_type, color, opacity=0.8):
    """Add decorative shapes/patterns to image"""
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    color_rgb = hex_to_rgb(color)
    color_rgba = (*color_rgb, int(255 * opacity))
    
    w, h = img.size
    
    if shape_type == "circles":
        # Top right circles
        for i in range(3):
            radius = 150 - (i * 40)
            x = w + 50 - (i * 30)
            y = -50 + (i * 30)
            draw.ellipse([x-radius, y-radius, x+radius, y+radius], fill=color_rgba)
        
        # Bottom left circles
        for i in range(2):
            radius = 200 - (i * 50)
            x = -80 + (i * 40)
            y = h + 100 - (i * 40)
            draw.ellipse([x-radius, y-radius, x+radius, y+radius], fill=color_rgba)
    
    elif shape_type == "grid":
        # Diagonal grid pattern
        step = 40
        for i in range(-10, 20):
            x1, y1 = i * step, 0
            x2, y2 = i * step + h, h
            draw.line([(x1, y1), (x2, y2)], fill=color_rgba, width=1)
    
    # Convert PIL image to RGB and blend
    overlay_rgb = overlay.convert('RGB')
    return Image.blend(img.convert('RGB'), overlay_rgb, 0.3)

def create_work_project_image(title, category, accent_color="#2563eb"):
    """Create a professional project showcase image"""
    width, height = 800, 600
    
    # Create gradient background
    img = create_gradient_background(width, height, "#0f172a", "#1e3a8a")
    
    # Add decorative overlay
    img = add_overlay_shape(img, "circles", accent_color, opacity=0.15)
    
    # Add blur effect
    img = img.filter(ImageFilter.GaussianBlur(radius=1))
    
    draw = ImageDraw.Draw(img)
    
    # Add category badge
    badge_color = hex_to_rgb(accent_color)
    draw.rectangle([40, 40, 240, 80], fill=badge_color, outline=hex_to_rgb("#94a3b8"), width=2)
    draw.text((60, 55), category, fill=hex_to_rgb("#f1f5f9"), font=None)
    
    # Add title
    text_color = hex_to_rgb("#f1f5f9")
    y_pos = height // 2 - 50
    
    # Simple text rendering (PIL default font)
    draw.text((60, y_pos), title, fill=text_color, font=None)
    
    # Add accent line
    draw.rectangle([60, y_pos + 100, 300, y_pos + 105], fill=badge_color)
    
    # Add corner design
    draw.rectangle([0, 0, 10, 80], fill=badge_color)
    draw.rectangle([width-10, height-80, width, height], fill=badge_color)
    
    return img

def create_blog_article_image(title, category, accent_color="#8b5cf6"):
    """Create a professional blog article cover image"""
    width, height = 1200, 630
    
    # Create gradient background
    img = create_gradient_background(width, height, "#1e293b", "#0f172a")
    
    # Add decorative overlay
    img = add_overlay_shape(img, "circles", accent_color, opacity=0.1)
    
    draw = ImageDraw.Draw(img)
    
    # Add category tag
    tag_color = hex_to_rgb(accent_color)
    draw.rectangle([60, 60, 260, 110], fill=tag_color, outline=hex_to_rgb("#94a3b8"), width=2)
    draw.text((80, 77), category, fill=hex_to_rgb("#f1f5f9"), font=None)
    
    # Add title area background
    draw.rectangle([60, 200, width-60, 400], fill=hex_to_rgb("#1e293b"), outline=tag_color, width=2)
    draw.text((90, 250), title[:30], fill=hex_to_rgb("#f1f5f9"), font=None)
    if len(title) > 30:
        draw.text((90, 300), title[30:], fill=hex_to_rgb("#f1f5f9"), font=None)
    
    # Add decorative line
    draw.rectangle([60, 450, width-60, 455], fill=tag_color)
    
    # Add corner accents
    draw.rectangle([0, 0, 20, 120], fill=tag_color)
    draw.rectangle([width-20, height-120, width, height], fill=tag_color)
    
    return img

def generate_work_images():
    """Generate all work project images"""
    projects = [
        {
            "slug": "ai-ecommerce-platform",
            "title": "AI E-Commerce Platform",
            "category": "E-Commerce",
            "color": "#2563eb"
        },
        {
            "slug": "brand-identity-system",
            "title": "Brand Identity System",
            "category": "Branding",
            "color": "#8b5cf6"
        },
        {
            "slug": "social-media-campaign",
            "title": "Social Campaign 500K+",
            "category": "Marketing",
            "color": "#ec4899"
        },
        {
            "slug": "mobile-app-design",
            "title": "Mobile App UI/UX",
            "category": "UI/UX",
            "color": "#06b6d4"
        },
        {
            "slug": "product-packaging",
            "title": "Product Packaging Design",
            "category": "Design",
            "color": "#f59e0b"
        },
        {
            "slug": "corporate-website",
            "title": "Corporate Website",
            "category": "Web Development",
            "color": "#10b981"
        }
    ]
    
    for project in projects:
        img = create_work_project_image(project["title"], project["category"], project["color"])
        path = f"public/work/{project['slug']}.jpg"
        img.save(path, quality=95)
        print(f"✓ Created: {path}")

def generate_blog_images():
    """Generate all blog article images"""
    articles = [
        {
            "slug": "ai-marketing-future",
            "title": "The Future of AI Marketing",
            "category": "AI & Marketing",
            "color": "#8b5cf6"
        },
        {
            "slug": "seo-trends-2025",
            "title": "SEO Trends 2025",
            "category": "SEO Strategy",
            "color": "#2563eb"
        },
        {
            "slug": "social-media-roi",
            "title": "Maximizing Social Media ROI",
            "category": "Social Media",
            "color": "#ec4899"
        },
        {
            "slug": "personal-branding",
            "title": "Personal Branding for Experts",
            "category": "Personal Brand",
            "color": "#f59e0b"
        },
        {
            "slug": "content-strategy-10x",
            "title": "Content Strategy: 10x Your Results",
            "category": "Content",
            "color": "#10b981"
        },
        {
            "slug": "design-psychology",
            "title": "Design Psychology",
            "category": "Design",
            "color": "#06b6d4"
        }
    ]
    
    for article in articles:
        img = create_blog_article_image(article["title"], article["category"], article["color"])
        path = f"public/blog/{article['slug']}.jpg"
        img.save(path, quality=95)
        print(f"✓ Created: {path}")

def main():
    """Generate all images"""
    print("Premium Image Generator for TIT Website")
    print("=" * 50)
    print()
    
    print("Generating Work Project Images...")
    generate_work_images()
    print()
    
    print("Generating Blog Article Images...")
    generate_blog_images()
    print()
    
    print("=" * 50)
    print("All premium images generated successfully!")
    print()
    print("Images created:")
    print("  * 6 Work project showcase images (800x600)")
    print("  * 6 Blog article cover images (1200x630)")
    print()
    print("Next steps:")
    print("  1. Start the dev server: npm run dev")
    print("  2. Visit /work and /blog to see the updated pages")
    print("  3. Replace placeholder images with actual photos for better quality")

if __name__ == "__main__":
    main()
