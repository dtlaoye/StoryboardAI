import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "dall-e-2",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
          }),
        }
      );

      const data = await response.json();
      setImageUrl(data?.data[0]?.url || null);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>StoryboardAI</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a story prompt..."
        style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
      />
      <br />
      <button
        onClick={generateImage}
        disabled={loading}
        style={{ padding: "10px 20px" }}
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>
      <br />
      {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={imageUrl}
            alt="Generated Art"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}
