const Enrollment = require('../models/Enrollment');
const mongoose = require('mongoose');
const { createClient } = require('@supabase/supabase-js');

// ADD THESE LINES:
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Helper to extract the filename from the URL
// URL: .../submissions/uploads/12345_file.pptx -> uploads/12345_file.pptx
const getFilePathFromUrl = (url) => {
    if (!url) return null;
    const parts = url.split('/submissions/');
    return parts.length > 1 ? parts[1] : null;
};

module.exports = { supabase, getFilePathFromUrl };