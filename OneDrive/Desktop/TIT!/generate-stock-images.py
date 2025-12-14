#!/usr/bin/env python3
"""
Professional Stock Image Downloader & Optimizer
Downloads domain-relevant images from Unsplash and optimizes for web
"""

import requests
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
from io import BytesIO
import json

# Create directories
os.makedirs("public/work", exist_ok=True)
os.makedirs("public/blog", exist_ok=True)

# Unsplash API Configuration (free, no API key needed for basic queries)
UNSPLASH_API = "https://api.unsplash.com/photos/random"

# Project & Blog configurations with search queries
work_projects = [
    {
        "name": "ecommerce-ai-platform",
        "title": "E-Commerce AI",
        "query": "ecommerce shopping online business",
        "width": 800,
        "height": 600
    },
    {
        "name": "brand-identity-system",
        "title": "Brand Identity",
        "query": "brand design identity logo creative",
        "width": 800,
        "height": 600
    },
    {
        "name": "social-media-viral-campaign",
        "title": "Social Media",
        "query": "social media marketing digital strategy",
        "width": 800,
        "height": 600
    },
    {
        "name": "mobile-app-ui-ux",
        "title": "Mobile UI/UX",
        "query": "mobile app design interface development",
        "width": 800,
        "height": 600
    },
    {
        "name": "sustainable-packaging-design",
        "title": "Packaging Design",
        "query": "packaging design product sustainable",
        "width": 800,
        "height": 600
    },
    {
        "name": "enterprise-website-redesign",
        "title": "Corporate Website",
        "query": "corporate website business web design",
        "width": 800,
        "height": 600
    }
]

blog_posts = [
    {
        "name": "ai-marketing-future",
        "title": "AI Marketing",
        "query": "artificial intelligence AI technology future",
        "width": 1200,
        "height": 630
    },
    {
        "name": "seo-trends-2025",
        "title": "SEO Trends 2025",
        "query": "search engine optimization analytics data",
        "width": 1200,
        "height": 630
    },
    {
        "name": "social-media-roi",
        "title": "Social Media ROI",
        "query": "analytics metrics business growth charts",
        "width": 1200,
        "height": 630
    },
    {
        "name": "personal-branding",
        "title": "Personal Branding",
        "query": "personal brand professional portrait",
        "width": 1200,
        "height": 630
    },
    {
        "name": "content-strategy-10x",
        "title": "Content Strategy",
        "query": "content marketing writing strategy creative",
        "width": 1200,
        "height": 630
    },
    {
        "name": "design-psychology",
        "title": "Design Psychology",
        "query": "design color psychology user experience",
        "width": 1200,
        "height": 630
    }
]

def download_image(query, retries=3):
    """Download random image from Unsplash based on query"""
    for attempt in range(retries):
        try:
            params = {
                "query": query,
                "orientation": "landscape",
                "count": 1
            }
            response = requests.get(UNSPLASH_API, params=params, timeout=10)
            
            if response.status_code == 200:
                data = response.json()[0] if isinstance(response.json(), list) else response.json()
                img_url = data['urls']['regular']
                img_response = requests.get(img_url, timeout=10)
                if img_response.status_code == 200:
                    return Image.open(BytesIO(img_response.content))
            elif response.status_code == 403:
                # Rate limit or auth issue
                print(f"⚠️  Unsplash rate limited, using fallback...")
                return None
        except Exception as e:
            print(f"⚠️  Attempt {attempt + 1}: {str(e)}")
    
    return None

def create_fallback_image(width, height, title, color):
    """Create fallback gradient image when API fails"""
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Add semi-transparent overlay
    draw.rectangle([(0, 0), (width, height)], fill=(0, 0, 0, 100))
    
    # Add text
    try:
        font = ImageFont.truetype("arial.ttf", int(width / 10))
    except:
        font = ImageFont.load_default()
    
    # Center text
    bbox = draw.textbbox((0, 0), title, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    draw.text((x, y), title, font=font, fill=(255, 255, 255))
    
    return img

def add_overlay(image, width, height, title):
    """Add professional overlay with title to image"""
    # Resize image to fit
    image.thumbnail((width, height), Image.Resampling.LANCZOS)
    
    # Create new image with proper dimensions
    final = Image.new('RGB', (width, height), (0, 0, 0))
    
    # Paste resized image centered
    offset = ((width - image.width) // 2, (height - image.height) // 2)
    final.paste(image, offset)
    
    # Add dark overlay for text readability
    overlay = Image.new('RGBA', (width, height), (0, 0, 0, 120))
    final.paste(overlay, (0, 0), overlay)
    
    # Add title text
    draw = ImageDraw.Draw(final, 'RGBA')
    
    try:
        font = ImageFont.truetype("arial.ttf", int(width / 12))
        font_small = ImageFont.truetype("arial.ttf", int(width / 25))
    except:
        font = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Title
    bbox = draw.textbbox((0, 0), title, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    y = (height // 2) - 30
    
    draw.text((x, y), title, font=font, fill=(255, 255, 255, 255))
    
    # Subtitle
    subtitle = "Professional • Premium • Custom"
    bbox_sub = draw.textbbox((0, 0), subtitle, font=font_small)
    sub_width = bbox_sub[2] - bbox_sub[0]
    x_sub = (width - sub_width) // 2
    
    draw.text((x_sub, y + 80), subtitle, font=font_small, fill=(200, 200, 200, 200))
    
    return final

def process_image(item, is_work=True):
    """Download, process, and save image"""
    print(f"Processing: {item['name']}", end=" ... ")
    
    # Download image
    img = download_image(item['query'])
    
    # Fallback if download fails
    if img is None:
        colors = [
            (52, 73, 94),    # Navy
            (41, 128, 185),  # Blue
            (46, 204, 113),  # Green
            (231, 76, 60),   # Red
            (155, 89, 182),  # Purple
            (230, 126, 34),  # Orange
        ]
        color = colors[hash(item['name']) % len(colors)]
        img = create_fallback_image(item['width'], item['height'], item['title'], color)
        print("(fallback)")
    else:
        print("✅")
    
    # Add overlay with title
    final_img = add_overlay(img, item['width'], item['height'], item['title'])
    
    # Optimize and save
    folder = "public/work" if is_work else "public/blog"
    filepath = f"{folder}/{item['name']}.jpg"
    
    # Save with optimization
    final_img = final_img.convert('RGB')
    final_img.save(filepath, 'JPEG', quality=90, optimize=True)
    
    # Get file size
    size_kb = os.path.getsize(filepath) / 1024
    print(f"   Saved: {filepath} ({size_kb:.1f} KB)")

def main():
    print("=" * 70)
    print("📸 Professional Stock Image Downloader & Web Optimizer")
    print("=" * 70)
    print()
    
    print("📊 Work Projects (800x600):")
    print("-" * 70)
    for project in work_projects:
        process_image(project, is_work=True)
    
    print()
    print("📰 Blog Posts (1200x630):")
    print("-" * 70)
    for post in blog_posts:
        process_image(post, is_work=False)
    
    print()
    print("=" * 70)
    print("✨ Professional images generated & optimized for web!")
    print("=" * 70)
    print()
    print("Summary:")
    print(f"  • Work Projects: {len(work_projects)} images (800x600)")
    print(f"  • Blog Posts: {len(blog_posts)} images (1200x630)")
    print(f"  • Format: JPEG (90% quality, optimized)")
    print(f"  • Location: public/work/ & public/blog/")
    print()
    print("Images are optimized for:")
    print("  ✓ Fast web loading")
    print("  ✓ Mobile responsiveness")
    print("  ✓ Professional appearance")
    print("  ✓ SEO optimization")

if __name__ == "__main__":
    main()
