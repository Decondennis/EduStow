import os
import math
from PIL import Image, ImageDraw, ImageFont

# Define brand colors
GOLD_LIGHT = (255, 240, 133)
GOLD_PRIMARY = (255, 228, 104) # #FFE468
GOLD_AMBER = (245, 158, 11)   # #F59E0B
GOLD_DARK = (217, 119, 6)     # #D97706

LIME_LIGHT = (228, 244, 217)  # #E4F4D9
LIME_PRIMARY = (140, 198, 65) # #8CC641
LIME_DARK = (115, 168, 44)    # #73A82C

DARK_NAVY = (15, 23, 42)      # #0F172A
DARK_SURFACE = (30, 41, 59)   # #1E293B
DARK_CHARCOAL = (39, 38, 48)  # #272630
WHITE = (255, 255, 255)
SLATE_MUTED = (148, 163, 184) # #94A3B8

def draw_squircle(draw, bbox, radius, fill_color, outline_color=None, outline_width=0):
    x0, y0, x1, y1 = bbox
    draw.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill_color, outline=outline_color, width=outline_width)

def render_edustow_mark(size=512):
    # 4x supersampling for ultra smooth antialiasing
    scale = 4
    img_size = size * scale
    img = Image.new("RGBA", (img_size, img_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    margin = int(img_size * 0.05)
    radius = int(img_size * 0.26)
    
    # 1. Dark squircle badge
    draw.rounded_rectangle(
        [margin, margin, img_size - margin, img_size - margin],
        radius=radius,
        fill=DARK_NAVY,
        outline=GOLD_PRIMARY,
        width=int(img_size * 0.02)
    )

    # 2. Modern Graduation Mortarboard / Academic Diamond Crest
    cx = img_size / 2
    top_y = img_size * 0.22
    cap_w = img_size * 0.46
    cap_h = img_size * 0.17

    cap_diamond = [
        (cx, top_y),                          # Top vertex
        (cx + cap_w / 2, top_y + cap_h / 2),  # Right vertex
        (cx, top_y + cap_h),                  # Bottom vertex
        (cx - cap_w / 2, top_y + cap_h / 2)   # Left vertex
    ]
    draw.polygon(cap_diamond, fill=GOLD_PRIMARY)

    # Cap lower band / rim for 3D depth
    rim_y = top_y + cap_h * 0.65
    rim_w = cap_w * 0.60
    rim_points = [
        (cx - rim_w / 2, rim_y),
        (cx + rim_w / 2, rim_y),
        (cx + rim_w / 2, rim_y + cap_h * 0.55),
        (cx, rim_y + cap_h * 0.85),
        (cx - rim_w / 2, rim_y + cap_h * 0.55)
    ]
    draw.polygon(rim_points, fill=GOLD_DARK)

    # Tassel string and bobble (Lime Green Accent)
    tassel_start = (cx + cap_w * 0.38, top_y + cap_h * 0.55)
    tassel_end = (cx + cap_w * 0.38, top_y + cap_h * 1.35)
    draw.line([tassel_start, tassel_end], fill=LIME_PRIMARY, width=int(img_size * 0.022))
    bobble_r = int(img_size * 0.025)
    draw.ellipse(
        [tassel_end[0] - bobble_r, tassel_end[1] - bobble_r, tassel_end[0] + bobble_r, tassel_end[1] + bobble_r],
        fill=LIME_PRIMARY
    )

    # 3. Dynamic Knowledge Wings / Open Book Pages
    # Left Page (Formal Brand Gold)
    book_top_y = top_y + cap_h + img_size * 0.08
    book_bottom_y = book_top_y + img_size * 0.28
    wing_w = img_size * 0.36
    
    # Left wing polygon
    left_wing = [
        (cx - img_size * 0.02, book_top_y + img_size * 0.04),
        (cx - img_size * 0.02, book_bottom_y + img_size * 0.04),
        (cx - wing_w, book_bottom_y - img_size * 0.02),
        (cx - wing_w, book_top_y - img_size * 0.02)
    ]
    draw.polygon(left_wing, fill=GOLD_PRIMARY)

    # Right Page (Vibrant Lime Green Growth)
    right_wing = [
        (cx + img_size * 0.02, book_top_y + img_size * 0.04),
        (cx + img_size * 0.02, book_bottom_y + img_size * 0.04),
        (cx + wing_w, book_bottom_y - img_size * 0.02),
        (cx + wing_w, book_top_y - img_size * 0.02)
    ]
    draw.polygon(right_wing, fill=LIME_PRIMARY)

    # Center Spine Pillar (Brilliant White Light)
    spine_w = img_size * 0.025
    spine_top = book_top_y - img_size * 0.01
    spine_bottom = book_bottom_y + img_size * 0.04
    draw.rounded_rectangle(
        [cx - spine_w / 2, spine_top, cx + spine_w / 2, spine_bottom],
        radius=int(spine_w / 2),
        fill=WHITE
    )

    # Resize down with LANCZOS high-quality resampling
    return img.resize((size, size), Image.Resampling.LANCZOS)

def render_edustow_full_logo(mark_img, width=960, height=240, dark_bg=True):
    # Full horizontal logo: Mark on left + "EduStow" + "SMART SCHOOL CLOUD"
    scale = 3
    W = width * scale
    H = height * scale
    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Paste scaled mark on the left
    mark_size = int(H * 0.76)
    mark_scaled = mark_img.resize((mark_size, mark_size), Image.Resampling.LANCZOS)
    mark_x = int(W * 0.04)
    mark_y = int((H - mark_size) / 2)
    img.paste(mark_scaled, (mark_x, mark_y), mark_scaled)

    # Typography setup
    font_path_bold = "C:/Windows/Fonts/segoeuib.ttf"
    font_path_regular = "C:/Windows/Fonts/segoeui.ttf"
    
    font_size_main = int(H * 0.42)
    font_size_sub = int(H * 0.11)

    try:
        font_main = ImageFont.truetype(font_path_bold, font_size_main)
        font_sub = ImageFont.truetype(font_path_bold, font_size_sub)
    except:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    text_x = mark_x + mark_size + int(W * 0.035)
    text_y = int(H * 0.20)

    # "Edu"
    edu_text = "Edu"
    edu_color = WHITE if dark_bg else (30, 41, 59)
    draw.text((text_x, text_y), edu_text, font=font_main, fill=edu_color)

    # Measure "Edu" width to place "Stow"
    edu_bbox = draw.textbbox((text_x, text_y), edu_text, font=font_main)
    stow_x = edu_bbox[2] + int(W * 0.005)

    # "Stow" in formal yellow
    stow_text = "Stow"
    stow_color = GOLD_PRIMARY
    draw.text((stow_x, text_y), stow_text, font=font_main, fill=stow_color)

    # Accent Dot in Lime Green
    stow_bbox = draw.textbbox((stow_x, text_y), stow_text, font=font_main)
    dot_r = int(H * 0.042)
    dot_cx = stow_bbox[2] + int(W * 0.015)
    dot_cy = text_y + int(H * 0.12)
    draw.ellipse([dot_cx - dot_r, dot_cy - dot_r, dot_cx + dot_r, dot_cy + dot_r], fill=LIME_PRIMARY)

    # Subtitle / Category Tagline
    sub_text = "SMART SCHOOL AUTOMATION"
    sub_color = (203, 213, 225) if dark_bg else (100, 116, 139)
    sub_y = text_y + int(font_size_main * 1.14)
    draw.text((text_x + int(W * 0.002), sub_y), sub_text, font=font_sub, fill=sub_color)

    return img.resize((width, height), Image.Resampling.LANCZOS)

# Generate assets
print("Generating high-resolution EduStow graphics...")
mark_512 = render_edustow_mark(size=512)
mark_128 = render_edustow_mark(size=128)
mark_64 = render_edustow_mark(size=64)
mark_32 = render_edustow_mark(size=32)
mark_16 = render_edustow_mark(size=16)

# Save Marks
os.makedirs("public", exist_ok=True)
os.makedirs("public/img", exist_ok=True)

mark_512.save("public/edustow-mark.png", format="PNG")
mark_512.save("public/img/EDU 3.png", format="PNG")

# Favicon files
mark_16.save("public/favicon-16x16.png", format="PNG")
mark_32.save("public/favicon-32x32.png", format="PNG")
mark_64.save("public/favicon-48x48.png", format="PNG")
mark_128.save("public/apple-touch-icon.png", format="PNG")
mark_512.save("public/img/favicon.png", format="PNG")

# Multi-resolution ICO
mark_512.save(
    "public/favicon.ico", 
    format="ICO", 
    sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
)
mark_512.save(
    "public/img/favicon.ico", 
    format="ICO", 
    sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
)

# Full Brand Logos (for dark backgrounds and general usage)
logo_dark = render_edustow_full_logo(mark_512, width=960, height=240, dark_bg=True)
logo_dark.save("public/edustow-logo.png", format="PNG")
logo_dark.save("public/img/logo.png", format="PNG")

# Light background version
logo_light = render_edustow_full_logo(mark_512, width=960, height=240, dark_bg=False)
logo_light.save("public/edustow-logo-light.png", format="PNG")
logo_light.save("public/img/logo-light.png", format="PNG")

print("All raster images and icons created successfully!")
