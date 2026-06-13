-- ============================================================
-- AyaTech seed + migration script
-- Run ONCE in the Supabase SQL editor (or psql) after the
-- schema in supabase_schema.sql has been applied.
--
-- The PUBLIC site reads ONLY from these tables (no hardcoded
-- fallback in the app). This script populates every section so
-- nothing is empty. It uses REAL images shipped in /public, not
-- external placeholders.
--
-- Idempotent: courses/blogs use ON CONFLICT(slug); the other
-- tables only seed when empty.
-- ============================================================

-- 1) Migration: the admin Blogs form writes a `category`, but the
--    original schema did not define the column. Ensure it exists.
ALTER TABLE blogs ADD COLUMN IF NOT EXISTS category TEXT;

-- ------------------------------------------------------------
-- 2) COURSES (the real catalogue). image_url points at real
--    assets in /public/images — replace per-course from
--    /admin/courses whenever you have final artwork.
-- ------------------------------------------------------------
INSERT INTO courses (slug, category, audience, title, tagline, description, modules, duration, format, stars, review_count, image_url, img_accent)
VALUES
  ('young-tinkerpreneur','Student Program','students','Young Tinkerpreneur','Idea → invention → income. Founders-in-training.','A comprehensive 1-year program where students learn to identify real-world problems, build physical or digital prototypes, and take their inventions to market. Perfect for aspiring young founders.','12 Modules','1 Year','Hybrid Cohort',5,'250+ builders','/images/Zenith1.png','#1C2A57'),
  ('young-vibe-coder','Student Program','students','Young Vibe Coder','The new way kids code — AI pair-programming.','Instead of memorizing syntax, kids learn to build alongside AI. They will master computational thinking and deploy real applications faster than traditional coding camps.','10 Modules','6 Months','Online Cohort',5,'250+ builders','/images/Zenith2.png','#3AB54A'),
  ('3d-world-creator','Student Program','students','3D World Creator','Blank screen → playable 3D world with Unity.','Step into the metaverse. Students will learn the fundamentals of 3D design, modeling, and game logic using Unity, ending the program with their own playable world.','10 Modules','6 Months','Hybrid Cohort',5,'250+ builders','/images/Zenith1.png','#1C2A57'),
  ('future-coder-sprint','Sprint Program','students','Future Coder Sprint','First win in week one. No syntax memorising.','An intense, high-energy 20-day sprint designed to give beginners their first major coding win. Focuses on rapid prototyping and visual coding concepts.','6 Modules','20 Days','Daily Live',5,'250+ builders','/images/Zenith2.png','#3AB54A'),
  ('3dx-tinkercad-sprint','Sprint Program','students','3DX Tinkercad Sprint','From nothing to a printed object in 20 days.','A fast-paced introduction to 3D printing. Students will master Tinkercad to design custom objects and see them brought to life in our labs.','6 Modules','20 Days','Online + Lab Day',5,'250+ builders','/images/Zenith1.png','#1C2A57'),
  ('foundation-of-robotics','Sprint Program','students','Foundation of Robotics','Live obstacle-avoidance robot on Day 20.','Get hands-on with hardware. In just 20 days, students will wire circuits, program microcontrollers, and build their very own functional robot.','6 Modules','20 Days','In-Lab',5,'250+ builders','/images/Zenith2.png','#3AB54A'),
  ('generative-ai-master-class','Professional Track','professionals','Generative AI Master Class','Become the AI lead your team needs.','A comprehensive deep dive into LLMs, prompt engineering, and building AI-driven applications. Position yourself as the AI champion in your organization.','5 Modules','12 Weeks','Live Cohort',5,'40+ pros','/images/Zenith1.png','#1C2A57'),
  ('data-science-with-python','Professional Track','professionals','Data Science with Python','The stack hiring managers fight over.','Master Pandas, NumPy, and Scikit-learn. Learn to process massive datasets, build predictive models, and deliver actionable business intelligence.','4 Modules','10 Weeks','Live Cohort',5,'40+ pros','/images/Zenith2.png','#3AB54A'),
  ('sql-master-class','Professional Track','professionals','SQL Master Class','Make data answer to you — window functions to CTEs.','Go beyond basic SELECT statements. This masterclass covers complex queries, query optimization, and advanced data modeling for serious analysts.','4 Modules','4 Weeks','Online + Sandbox',5,'40+ pros','/images/Zenith1.png','#1C2A57'),
  ('supabase-masterclass','Professional Track','professionals','Supabase Masterclass','Backend in a weekend. Ship without a server.','Learn to build scalable, secure backends using Supabase. Master authentication, row-level security, and edge functions in a single weekend intensive.','3 Modules','Weekend','Live Intensive',5,'40+ pros','/images/Zenith2.png','#3AB54A'),
  ('teachx-ai','Professional Track','professionals','Teachx-AI','Lesson plans & assessments in minutes.','Specifically designed for educators. Learn how to leverage AI tools to reduce administrative burden, personalize student feedback, and create engaging lesson plans.','5 Modules','6 Weeks','Online + Peer Circles',5,'40+ pros','/images/Zenith1.png','#1C2A57'),
  ('genai-video-mastery','Professional Track','professionals','GenAI Video Mastery','Direct cinema with prompts, not crews.','Explore the bleeding edge of generative video. Learn to script, generate, edit, and produce high-quality video content entirely using AI tools.','5 Modules','8 Weeks','Online + Critiques',5,'40+ pros','/images/Zenith2.png','#3AB54A'),
  ('prompt-engineering-for-all','Professional Track','professionals','Prompt Engineering for All','The highest-ROI skill of the decade.','Stop getting generic outputs. Learn the frameworks, techniques, and nuances of writing effective prompts that force AI models to do exactly what you want.','3 Modules','3 Weeks','Online Daily',5,'40+ pros','/images/Zenith1.png','#1C2A57'),
  ('agentic-automation-at-workplace','Professional Track','professionals','Agentic Automation at Workplace','Build digital employees that handle the boring 80%.','Connect multiple AI agents together to automate entire workflows. From parsing emails to generating reports, build systems that work while you sleep.','4 Modules','6 Weeks','Online + Workflow Gallery',5,'40+ pros','/images/Zenith2.png','#3AB54A')
ON CONFLICT (slug) DO NOTHING;

-- ------------------------------------------------------------
-- 3) COURSE CONTENTS — sample modules for one course so the
--    Curriculum section on the detail page shows real data.
--    Linked by slug so it works regardless of generated UUIDs.
-- ------------------------------------------------------------
INSERT INTO course_contents (course_id, title, description, content_type, media_url, order_index)
SELECT c.id, v.title, v.description, v.content_type, v.media_url, v.order_index
FROM courses c
JOIN (VALUES
  ('young-tinkerpreneur','Spotting Real Problems','Learn to find problems worth solving in your own world.','video','',1),
  ('young-tinkerpreneur','Sketch to Prototype','Turn an idea into a first physical or digital prototype.','document','',2),
  ('young-tinkerpreneur','Build & Test','Assemble, test, and iterate on your invention.','interactive','',3),
  ('young-tinkerpreneur','Pitch & Launch','Package your build and take it to a real audience.','video','',4)
) AS v(slug, title, description, content_type, media_url, order_index)
  ON c.slug = v.slug
WHERE NOT EXISTS (SELECT 1 FROM course_contents);

-- ------------------------------------------------------------
-- 4) TESTIMONIALS (real). Only seeds when the table is empty.
-- ------------------------------------------------------------
INSERT INTO testimonials (author_name, author_role, content, rating)
SELECT v.author_name, v.author_role, v.content, v.rating
FROM (VALUES
  ('Aryan Mehta','Grade 10 Student, Bengaluru','Before AyaTech I thought coding was just typing commands. After the AI Lab program I shipped a working chatbot for my school''s library — in eight weeks. Nothing else comes close to that kind of confidence.',5),
  ('Priya Nair','Software Engineer, Kochi','As a software engineer I assumed I already knew enough. The GenAI professional cohort changed that completely. I integrated an LLM workflow into our product pipeline within two weeks of graduating.',5),
  ('Rajesh Kumar','Parent, Coimbatore','My daughter was always curious about robotics but regular classes were too theoretical. AyaTech''s hardware sprint let her build an actual line-following robot. She hasn''t stopped building since.',5),
  ('Sanya Sharma','Grade 11 Student, Online','The 3D design track completely shifted my perspective. I went from having zero experience in Unity to creating my own interactive environments. Highly recommend for any creative builder.',5),
  ('Anand Menon','Startup Founder, Bengaluru','I needed to upskill in Prompt Engineering quickly for my startup. The weekend intensive was exactly what I needed—no fluff, just practical, agentic workflows that save me hours every day.',5)
) AS v(author_name, author_role, content, rating)
WHERE NOT EXISTS (SELECT 1 FROM testimonials);

-- ------------------------------------------------------------
-- 5) BLOGS — content for every tab (YouTube Videos / Student
--    Work / Success Stories). Real images from /public/images.
-- ------------------------------------------------------------
INSERT INTO blogs (title, slug, excerpt, content, author_name, image_url, category, published_at)
VALUES
  ('Full-Stack App Walkthrough: Next.js + Supabase','fullstack-nextjs-supabase','A complete walkthrough building and shipping a full-stack app with Next.js and Supabase.','https://www.youtube.com/','AyaTech Team','/images/Zenith1.png','YouTube Videos',NOW()),
  ('Build Your First AI Agent (Live Demo)','build-first-ai-agent','Watch a student build and deploy their first autonomous AI agent step by step.','https://www.youtube.com/','AyaTech Team','/images/Zenith2.png','YouTube Videos',NOW()),
  ('Fintech Dashboard Redesign','fintech-dashboard-redesign','A complete overhaul of a legacy financial dashboard by our UX/UI students.','A complete overhaul of a legacy financial dashboard, focusing on accessibility, dark mode, and streamlined transaction flows.','Sanya Sharma','/images/Zenith1.png','Student Work',NOW()),
  ('AI Content Generator SaaS','ai-content-generator-saas','A scalable web app built with Next.js, Tailwind, and an LLM API.','A scalable web application featuring authentication, a credit system, and a responsive design, built end-to-end by our students.','Aryan Mehta','/images/Zenith2.png','Student Work',NOW()),
  ('From Beginner to Engineer in 1 Year','beginner-to-engineer','The journey of a graduate who moved into a full-time engineering role.','From writing a first line of code to landing a dream job through our intensive, project-based program.','Priya Nair','/images/Zenith1.png','Success Stories',NOW()),
  ('A Parent''s Perspective on the Robotics Sprint','parent-perspective-robotics','How a hands-on hardware sprint reignited a love of building.','A parent shares how the robotics sprint turned curiosity into a daily building habit at home.','Rajesh Kumar','/images/Zenith2.png','Success Stories',NOW())
ON CONFLICT (slug) DO NOTHING;

-- ------------------------------------------------------------
-- 6) SLIDERS — active home-page slides. Only seeds when empty.
-- ------------------------------------------------------------
INSERT INTO sliders (title, image_url, link_url, order_index, is_active)
SELECT v.title, v.image_url, v.link_url, v.order_index, v.is_active
FROM (VALUES
  ('Build. Launch. Lead.','/images/Zenith1.png','/students',1,true),
  ('AI-native programs for professionals','/images/Zenith2.png','/professionals',2,true)
) AS v(title, image_url, link_url, order_index, is_active)
WHERE NOT EXISTS (SELECT 1 FROM sliders);
