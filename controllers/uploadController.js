const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

exports.uploadFile = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No file selected" });

        // 1. Create a unique path for the file
        const fileName = `${Date.now()}_${req.file.originalname}`;
        const filePath = `uploads/${fileName}`;

        // 2. Upload the buffer directly to Supabase
        const { data, error } = await supabase.storage
            .from(process.env.SUPABASE_BUCKET)
            .upload(filePath, req.file.buffer, {
                contentType: req.file.mimetype,
                upsert: false
            });

        if (error) throw error;

        // 3. Get the Public URL
        const { data: { publicUrl } } = supabase.storage
            .from(process.env.SUPABASE_BUCKET)
            .getPublicUrl(filePath);

        // Send back the URL to the frontend
        res.json({ url: publicUrl });

    } catch (err) {
        console.error("Upload failed:", err);
        res.status(500).json({ message: "Cloud upload failed" });
    }
};