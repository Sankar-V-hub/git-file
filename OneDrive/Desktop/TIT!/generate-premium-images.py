#!/usr/bin/env python3
"""
Premium Domain-Based Image Generator for Work Projects and Blog Posts
Generates attractive, domain-relevant images optimized for customer attraction
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
from datetime import datetime

# Create directories if they don't exist
os.makedirs("public/work", exist_ok=True)
os.makedirs("public/blog", exist_ok=True)

def create_gradient(width, height, color1, color2):
    """Create a gradient background"""
    image = Image.new('RGB', (width, height), color1)
    draw = ImageDraw.Draw(image, 'RGBA')
    
    for y in range(height):
        ratio = y / height
        r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
        g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
        b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return image

def add_text_with_shadow(image, text, position, font_size=40, color=(255, 255, 255)):
    """Add text with shadow effect"""
    draw = ImageDraw.Draw(image, 'RGBA')
    
    # Try to use a good font, fall back to default
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Shadow
    shadow_offset = 2
    draw.text((position[0] + shadow_offset, position[1] + shadow_offset), text, 
              font=font, fill=(0, 0, 0, 100))
    
    # Main text
    draw.text(position, text, font=font, fill=color)

def generate_work_images():
    """Generate premium images for work projects"""
    work_projects = [
        {
            "name": "ecommerce-ai-platform",
            "title": "E-Commerce AI",
            "colors": [(52, 73, 94), (41, 128, 185)],  # Dark blue to bright blue
            "icon": "🛒"
        },
        {
            "name": "brand-identity-system",
            "title": "Brand Identity",
            "colors": [(155, 89, 182), (241, 196, 15)],  # Purple to gold
            "icon": "✨"
        },
        {
            "name": "social-media-viral-campaign",
            "title": "Social Media",
            "colors": [(46, 204, 113), (52, 152, 219)],  # Green to blue
            "icon": "📱"
        },
        {
            "name": "mobile-app-ui-ux",
            "title": "Mobile UI/UX",
            "colors": [(231, 76, 60), (236, 112, 99)],  # Red gradient
            "icon": "📲"
        },
        {
            "name": "sustainable-packaging-design",
            "title": "Packaging Design",
            "colors": [(39, 174, 96), (46, 213, 115)],  # Green gradient
            "icon": "📦"
        },
        {
            "name": "enterprise-website-redesign",
            "title": "Corporate Website",
            "colors": [(52, 73, 94), (176, 190, 197)],  # Navy to gray
            "icon": "🌐"
        }
    ]
    
    for project in work_projects:
        # Create 800x600 premium image
        img = create_gradient(800, 600, tuple(project["colors"][0]), tuple(project["colors"][1]))
        
        # Add subtle texture
        draw = ImageDraw.Draw(img, 'RGBA')
        for i in range(0, 800, 50):
            draw.line([(i, 0), (i, 600)], fill=(255, 255, 255, 5), width=1)
        
        # Add text
        add_text_with_shadow(img, project["icon"], (50, 50), 80)
        add_text_with_shadow(img, project["title"], (50, 150), 55, (255, 255, 255))
        
        # Add descriptive text
        try:
            font_small = ImageFont.truetype("arial.ttf", 18)
        except:
            font_small = ImageFont.load_default()
        
        desc_text = "Professional Design • High Performance"
        draw.text((50, 450), desc_text, font=font_small, fill=(255, 255, 255, 220))
        
        # Save with optimization
        file_path = f"public/work/{project['name']}.jpg"
        img.save(file_path, 'JPEG', quality=95, optimize=True)
        print(f"✅ Generated: {file_path}")

def generate_blog_images():
    """Generate premium images for blog posts"""
    blog_posts = [
        {
            "name": "ai-marketing-future",
            "title": "AI Marketing",
            "colors": [(44, 62, 80), (52, 152, 219)],
            "icon": "🤖"
        },
        {
            "name": "seo-trends-2025",
            "title": "SEO Trends 2025",
            "colors": [(46, 204, 113), (26, 188, 156)],
            "icon": "📈"
        },
        {
            "name": "social-media-roi",
            "title": "Social Media ROI",
            "colors": [(230, 126, 34), (231, 76, 60)],
            "icon": "💰"
        },
        {
            "name": "personal-branding",
            "title": "Personal Branding",
            "colors": [(155, 89, 182), (142, 68, 173)],
            "icon": "👤"
        },
        {
            "name": "content-strategy-10x",
            "title": "Content Strategy",
            "colors": [(52, 152, 219), (41, 128, 185)],
            "icon": "📝"
        },
        {
            "name": "design-psychology",
            "title": "Design Psychology",
            "colors": [(241, 196, 15), (230, 126, 34)],
            "icon": "🎨"
        }
    ]
    
    for post in blog_posts:
        # Create 1200x630 premium image for blog
        img = create_gradient(1200, 630, tuple(post["colors"][0]), tuple(post["colors"][1]))
        
        # Add pattern overlay
        draw = ImageDraw.Draw(img, 'RGBA')
        for i in range(0, 1200, 100):
            for j in range(0, 630, 100):
                draw.ellipse([i, j, i+30, j+30], fill=(255, 255, 255, 10))
        
        # Add text
        add_text_with_shadow(img, post["icon"], (100, 80), 100)
        add_text_with_shadow(img, post["title"], (100, 200), 70, (255, 255, 255))
        
        # Add blog metadata
        try:
            font_small = ImageFont.truetype("arial.ttf", 20)
        except:
            font_small = ImageFont.load_default()
        
        meta_text = "Deep Insights • Expert Analysis • Latest Trends"
        draw.text((100, 520), meta_text, font=font_small, fill=(255, 255, 255, 230))
        
        # Save with optimization
        file_path = f"public/blog/{post['name']}.jpg"
        img.save(file_path, 'JPEG', quality=95, optimize=True)
        print(f"✅ Generated: {file_path}")

def main():
    print("=" * 60)
    print("🎨 Premium Domain-Based Image Generator")
    print("=" * 60)
    
    print("\n📊 Generating Work Project Images (800x600)...")
    generate_work_images()
    
    print("\n📰 Generating Blog Post Images (1200x630)...")
    generate_blog_images()
    
    print("\n" + "=" * 60)
    print("✨ All premium images generated successfully!")
    print("=" * 60)
    print("\nImage Summary:")
    print("  • Work Projects: 6 images (800x600)")
    print("  • Blog Posts: 6 images (1200x630)")
    print("  • Format: JPEG (95% quality)")
    print("  • Location: public/work/ & public/blog/")

if __name__ == "__main__":
    main()
