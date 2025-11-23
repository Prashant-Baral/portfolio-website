/**
 * Content Validation Script
 * Validates markdown files and checks for common issues
 * 
 * Usage: node scripts/validate.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');
const PROJECTS_DIR = path.join(CONTENT_DIR, 'projects');
const ASSETS_DIR = path.join(__dirname, '..', 'assets', 'images');

let errors = [];
let warnings = [];

/**
 * Check if directory exists
 */
function checkDirectory(dir, name) {
    if (!fs.existsSync(dir)) {
        errors.push(`${name} directory not found: ${dir}`);
        return false;
    }
    return true;
}

/**
 * Parse frontmatter from markdown file
 */
function parseFrontmatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);

    if (!match) {
        return { frontmatter: null, content };
    }

    const frontmatter = {};
    match[1].split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            value = value.replace(/^["']|["']$/g, '');

            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
            }

            frontmatter[key] = value;
        }
    });

    return { frontmatter, content: match[2] };
}

/**
 * Validate blog post
 */
function validateBlogPost(filePath, filename) {
    const { frontmatter, content } = parseFrontmatter(filePath);

    if (!frontmatter) {
        errors.push(`${filename}: Missing or invalid frontmatter`);
        return;
    }

    // Required fields
    if (!frontmatter.title) {
        errors.push(`${filename}: Missing required field 'title'`);
    }
    if (!frontmatter.date) {
        errors.push(`${filename}: Missing required field 'date'`);
    }
    if (!frontmatter.excerpt) {
        warnings.push(`${filename}: Missing 'excerpt' field (recommended)`);
    }

    // Check date format
    if (frontmatter.date && isNaN(Date.parse(frontmatter.date))) {
        errors.push(`${filename}: Invalid date format '${frontmatter.date}'`);
    }

    // Check image path
    if (frontmatter.image) {
        const imagePath = path.join(__dirname, '..', frontmatter.image);
        if (!fs.existsSync(imagePath)) {
            warnings.push(`${filename}: Image not found: ${frontmatter.image}`);
        }
    }

    // Check content length
    if (content.trim().length < 100) {
        warnings.push(`${filename}: Content is very short (${content.trim().length} characters)`);
    }

    // Check for empty tags
    if (frontmatter.tags && Array.isArray(frontmatter.tags) && frontmatter.tags.length === 0) {
        warnings.push(`${filename}: Tags array is empty`);
    }
}

/**
 * Validate project
 */
function validateProject(filePath, filename) {
    const { frontmatter, content } = parseFrontmatter(filePath);

    if (!frontmatter) {
        errors.push(`${filename}: Missing or invalid frontmatter`);
        return;
    }

    // Required fields
    if (!frontmatter.title) {
        errors.push(`${filename}: Missing required field 'title'`);
    }
    if (!frontmatter.description) {
        errors.push(`${filename}: Missing required field 'description'`);
    }

    // Check technologies
    if (!frontmatter.technologies || !Array.isArray(frontmatter.technologies) || frontmatter.technologies.length === 0) {
        warnings.push(`${filename}: No technologies listed`);
    }

    // Check image path
    if (frontmatter.image) {
        const imagePath = path.join(__dirname, '..', frontmatter.image);
        if (!fs.existsSync(imagePath)) {
            warnings.push(`${filename}: Image not found: ${frontmatter.image}`);
        }
    } else {
        warnings.push(`${filename}: No featured image specified`);
    }

    // Check URLs
    if (!frontmatter.demo_url && !frontmatter.github_url) {
        warnings.push(`${filename}: No demo or GitHub URL provided`);
    }

    // Validate URLs
    if (frontmatter.demo_url && !isValidUrl(frontmatter.demo_url)) {
        errors.push(`${filename}: Invalid demo_url: ${frontmatter.demo_url}`);
    }
    if (frontmatter.github_url && !isValidUrl(frontmatter.github_url)) {
        errors.push(`${filename}: Invalid github_url: ${frontmatter.github_url}`);
    }

    // Check content length
    if (content.trim().length < 200) {
        warnings.push(`${filename}: Project details are very short (${content.trim().length} characters)`);
    }
}

/**
 * Check if string is valid URL
 */
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

/**
 * Validate all blog posts
 */
function validateBlogPosts() {
    console.log('📝 Validating blog posts...');

    if (!checkDirectory(BLOG_DIR, 'Blog')) return;

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

    if (files.length === 0) {
        warnings.push('No blog posts found');
        return;
    }

    files.forEach(file => {
        const filePath = path.join(BLOG_DIR, file);
        validateBlogPost(filePath, `blog/${file}`);
    });

    console.log(`   Checked ${files.length} blog post(s)`);
}

/**
 * Validate all projects
 */
function validateProjects() {
    console.log('🚀 Validating projects...');

    if (!checkDirectory(PROJECTS_DIR, 'Projects')) return;

    const files = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith('.md'));

    if (files.length === 0) {
        warnings.push('No projects found');
        return;
    }

    files.forEach(file => {
        const filePath = path.join(PROJECTS_DIR, file);
        validateProject(filePath, `projects/${file}`);
    });

    console.log(`   Checked ${files.length} project(s)`);
}

/**
 * Main validation function
 */
function main() {
    console.log('🔍 Starting content validation...\n');

    validateBlogPosts();
    console.log('');
    validateProjects();

    console.log('\n📊 Validation Results:');
    console.log('━'.repeat(50));

    if (errors.length > 0) {
        console.log('\n❌ Errors:');
        errors.forEach(err => console.log(`   • ${err}`));
    }

    if (warnings.length > 0) {
        console.log('\n⚠️  Warnings:');
        warnings.forEach(warn => console.log(`   • ${warn}`));
    }

    if (errors.length === 0 && warnings.length === 0) {
        console.log('\n✅ All content validated successfully!');
    } else {
        console.log(`\n📈 Summary: ${errors.length} error(s), ${warnings.length} warning(s)`);
    }

    // Exit with error code if there are errors
    if (errors.length > 0) {
        process.exit(1);
    }
}

// Run validation
main();