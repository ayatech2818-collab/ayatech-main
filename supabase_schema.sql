-- Supabase Schema for Zenith Project
-- Covers Sliders, Courses, Course Content, Testimonials, and Blogs

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-----------------------------------------
-- 1. Sliders (Image Sliding Uploading)
-----------------------------------------
CREATE TABLE sliders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    image_url TEXT NOT NULL,
    link_url TEXT,
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-----------------------------------------
-- 2. Courses (Course uploading with image)
-----------------------------------------
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    audience TEXT NOT NULL, -- 'students' or 'professionals'
    title TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    modules TEXT,
    duration TEXT,
    format TEXT,
    stars INTEGER DEFAULT 5,
    review_count TEXT,
    image_url TEXT NOT NULL,
    img_accent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-----------------------------------------
-- 3. Course Content (Individual course content)
-----------------------------------------
CREATE TABLE course_contents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    content_type TEXT DEFAULT 'video', -- e.g., 'video', 'document', 'quiz'
    media_url TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-----------------------------------------
-- 4. Testimonials (Testimonials uploading)
-----------------------------------------
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_name TEXT NOT NULL,
    author_role TEXT,
    content TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-----------------------------------------
-- 5. Blogs (Whole blog page/section content)
-----------------------------------------
CREATE TABLE blogs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL, -- rich text or markdown
    author_name TEXT NOT NULL,
    author_avatar_url TEXT,
    image_url TEXT NOT NULL,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-----------------------------------------
-- 6. Site Settings (key/value store for admin-managed homepage images)
-----------------------------------------
CREATE TABLE IF NOT EXISTS site_settings (
    key TEXT PRIMARY KEY,
    value TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- Readable by the public site, writable only with an authenticated (admin) session.
GRANT SELECT ON site_settings TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON site_settings TO authenticated;
-- Homepage image slots (empty value = show the default placeholder)
INSERT INTO site_settings (key, value) VALUES
    ('home_card_parent', ''),
    ('home_card_learner', ''),
    ('home_card_professional', ''),
    ('home_cta', ''),
    ('home_showcase_1', ''),
    ('home_showcase_2', ''),
    ('home_showcase_3', ''),
    ('home_showcase_4', '')
ON CONFLICT (key) DO NOTHING;

-----------------------------------------
-- Add updated_at trigger function
-----------------------------------------
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
CREATE TRIGGER update_sliders_modtime BEFORE UPDATE ON sliders FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_courses_modtime BEFORE UPDATE ON courses FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_course_contents_modtime BEFORE UPDATE ON course_contents FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_testimonials_modtime BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
CREATE TRIGGER update_blogs_modtime BEFORE UPDATE ON blogs FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

-----------------------------------------
-- Storage Buckets (For Image Uploads)
-----------------------------------------
-- Note: You might need to run these in the Supabase SQL editor as superuser
INSERT INTO storage.buckets (id, name, public) VALUES ('public-images', 'public-images', true) ON CONFLICT DO NOTHING;

-- Storage Policies for public-images
-- Allow public read access
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'public-images');
-- Allow authenticated users to upload
CREATE POLICY "Auth Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'public-images' AND auth.role() = 'authenticated');
-- Allow authenticated users to update their own objects
CREATE POLICY "Auth Update" ON storage.objects FOR UPDATE USING (bucket_id = 'public-images' AND auth.role() = 'authenticated');
-- Allow authenticated users to delete their own objects
CREATE POLICY "Auth Delete" ON storage.objects FOR DELETE USING (bucket_id = 'public-images' AND auth.role() = 'authenticated');
