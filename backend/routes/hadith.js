import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// ✅ Get main categories
router.get("/categories", async (req, res) => {
  const { language = "en" } = req.query;
  try {
    const response = await fetch(
      `https://hadeethenc.com/api/v1/categories/roots/?language=${language}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`❌ HadeethEnc API error: Status ${response.status}, Body: ${errorBody}`);
      return res.status(response.status).json({ error: "Failed to fetch categories from external API." });
    }

    const data = await response.json();

    // Ensure array
    if (!Array.isArray(data)) {
      console.error("❌ Unexpected API format:", data);
      return res.status(500).json({ error: "Unexpected API response" });
    }

    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching categories:", err.message);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// ✅ Get hadith list by category
router.get("/list", async (req, res) => {
  const { language = "en", category_id = 1, page = 1, per_page = 10 } = req.query;
  try {
    const response = await fetch(
      `https://hadeethenc.com/api/v1/hadeeths/list/?language=${language}&category_id=${category_id}&page=${page}&per_page=${per_page}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`❌ HadeethEnc API error: Status ${response.status}, Body: ${errorBody}`);
      return res.status(response.status).json({ error: "Failed to fetch hadith list from external API." });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching hadith list:", err.message);
    res.status(500).json({ error: "Failed to fetch hadiths" });
  }
});

// ✅ Get single hadith by ID
router.get("/one", async (req, res) => {
  const { id, language = "en" } = req.query;
  try {
    const response = await fetch(
      `https://hadeethenc.com/api/v1/hadeeths/one/?language=${language}&id=${id}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`❌ HadeethEnc API error: Status ${response.status}, Body: ${errorBody}`);
      return res.status(response.status).json({ error: "Failed to fetch single hadith from external API." });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching hadith:", err.message);
    res.status(500).json({ error: "Failed to fetch hadith" });
  }
});

export default router;
