/**
 * VERCEL DEPLOYMENT PAYLOAD: RFQ PRESENTATION
 * * Instructions:
 * 1. Get a Vercel Personal Access Token (vercel.com/account/tokens)
 * 2. Run the 'deployToVercel' function in your browser console or a Node.js environment.
 */

// Load environment variables from .env file if in a Node.js environment
if (typeof process !== 'undefined' && process.env) {
  try {
    require('dotenv').config();
  } catch (e) {
    // This catch block handles cases where dotenv might not be installed
    // but the script is still run in Node.js.
    console.warn("dotenv module not found. If running in Node.js, please install it: npm install dotenv");
  }
}

const rfqCssContent = `/* Styles moved inline into index.html */`;

const rfqHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <script>
      const PASSWORD = "concise2026";

      const stored = sessionStorage.getItem("auth");

      if (!stored) {
        const input = prompt("Enter password to view this presentation (Hint: check 1password):");

        if (input !== PASSWORD) {
          alert("Incorrect password.");
          window.location.href = "https://www.concise.digital";
        } else {
          sessionStorage.setItem("auth", "true");
        }
      }
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RFQ Strategy: Concise Digital 2026</title>
    <meta name="robots" content="noindex, nofollow">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --brand-orange: #F97316;
            --brand-navy: #0F172A;
            --brand-white: #F8FAFC;
            --brand-grey: #94A3B8;
            --brand-blue: #3B82F6;
            --footer-height: 80px;
            --transition-speed: 0.3s;
        }
        /* Dark Theme (Default) */
        :root, [data-theme="dark"] {
            --bg-main: #0F172A; --bg-alt: #1E293B; --text-main: #F8FAFC; --footer-bg: #1E293B; --card-bg: #1E293B; --border-color: #334155;
            --text-secondary: #94A3B8;
            --accent-main: #F97316;
            --logo-filter: none;
        }
        /* Light Theme */
        [data-theme="light"] {
            --bg-main: #E5E7EB; --bg-alt: #D1D5DB; --text-main: #0F172A; --footer-bg: #FFFFFF; --card-bg: #FFFFFF; --border-color: #D1D5DB;
            --text-secondary: #4B5563;
            --accent-main: #C2410C;
            --logo-filter: invert(8%) sepia(34%) saturate(4649%) hue-rotate(213deg) brightness(96%) contrast(97%);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background-color: var(--bg-main); color: var(--text-main); overflow: hidden; line-height: 1.5; transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease; }
        .presentation-container { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none; height: calc(100vh - var(--footer-height)); }
        .presentation-container::-webkit-scrollbar { display: none; }
        .slide { min-height: calc(100vh - var(--footer-height)); min-width: 100vw; flex-shrink: 0; display: flex; align-items: center; justify-content: center; scroll-snap-align: start; padding: 1.5rem; border-right: 1px solid var(--border-color); }
        .slide-content { width: 100%; max-width: 1100px; margin: 0 auto; }
        .slide-alt { background-color: var(--bg-alt); transition: background-color var(--transition-speed) ease; }
        h1, h2 { font-weight: 700; line-height: 1.1; color: var(--text-main); margin-bottom: 1.5rem; }
        h1 { font-size: clamp(2rem, 8vw, 3.5rem); } h2 { font-size: clamp(1.75rem, 6vw, 2.5rem); }
        h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; } h4 { font-size: 1.125rem; font-weight: 700; margin-bottom: 0.5rem; }
        p { color: var(--text-secondary); font-size: clamp(1rem, 2vw, 1.125rem); transition: color var(--transition-speed) ease; }
        .lead { font-size: clamp(1.125rem, 3vw, 1.25rem); color: var(--text-secondary); margin-bottom: 2.5rem; transition: color var(--transition-speed) ease; }
        .accent { color: var(--accent-main); transition: color var(--transition-speed) ease; }
        .grid-2 { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        @media (min-width: 768px) { .grid-2 { grid-template-columns: 1fr 1fr; gap: 2rem; } }
        .card { padding: 1.5rem; background-color: var(--card-bg); border-radius: 0.75rem; border: 1px solid var(--border-color); transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease; }
        .card-highlight { border-left: 4px solid var(--brand-orange); }
        .roi-card { padding: 2rem; background-color: var(--card-bg); border: 1px solid var(--border-color); border-radius: 1rem; text-align: center; }
        .roi-value { font-size: 3.5rem; font-weight: 700; color: var(--accent-main); transition: color var(--transition-speed) ease; }
        .quadrant-container { position: relative; height: 300px; width: 100%; background-color: var(--bg-main); border: 1px solid var(--border-color); border-radius: 0.5rem; margin-top: 2rem; }
        .quadrant-grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; height: 100%; }
        .quad-cell { border: 0.5px solid var(--border-color); }
        .quad-winner { background: rgba(59, 130, 246, 0.15); border: 1px solid var(--brand-blue); margin: 4px; display: flex; align-items: center; justify-content: center; font-weight: bold; }
        .label-v { position: absolute; left: -2.5rem; top: 50%; transform: rotate(-90deg) translateY(-50%); font-size: 0.75rem; color: var(--text-secondary); transition: color var(--transition-speed) ease; }
        .label-h { position: absolute; bottom: -1.5rem; left: 50%; transform: translateX(-50%); font-size: 0.75rem; color: var(--text-secondary); transition: color var(--transition-speed) ease; }
        .roadmap-item { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
        .q-badge { background: var(--accent-main); color: white; width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; transition: background-color var(--transition-speed) ease; }
        .presentation-footer { position: fixed; bottom: 0; left: 0; width: 100%; height: var(--footer-height); background-color: var(--footer-bg); border-top: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; padding: 0 2rem; z-index: 100; transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease; }
        .footer-left { display: flex; align-items: center; gap: 2rem; }
        .footer-logo { height: 30px; width: auto; filter: var(--logo-filter); transition: filter var(--transition-speed) ease; }
        .controls { display: flex; gap: 0.5rem; }
        .nav-btn { background: none; border: none; color: var(--text-main); padding: 0.75rem; cursor: pointer; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .nav-btn:hover { background: rgba(0,0,0,0.05); color: var(--brand-orange); }
        .nav-btn svg { width: 1.5rem; height: 1.5rem; fill: currentColor; }
        @media (max-width: 768px) { .presentation-footer { padding: 0 1rem; } .footer-left { gap: 1rem; } .footer-logo { height: 20px; } }
    </style>
</head>
<body>
    <main class="presentation-container" id="slider">
        <section class="slide">
            <div class="slide-content">
                <h1>Executive Summary & <span class="accent">Current Positioning</span></h1>
                <p class="lead">Overview: Concise Digital stands out through unyielding transparency, local expertise, and comprehensive service offerings.</p>
                <div class="grid-2">
                    <div class="card">
                        <h3 class="accent">Current Positioning</h3>
                        <p>A highly capable, all-in-one digital partner for SMEs, proudly operating without lock-in contracts.</p>
                    </div>
                    <div class="card">
                        <h3 class="accent">Market Context (Apr 2026)</h3>
                        <p>Highlighting technological adaptability whilst maintaining a strong, human-centric support model as agencies pivot to automation.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="slide slide-alt">
            <div class="slide-content">
                <h2 class="accent">Competitor Landscape</h2>
                <div class="grid-2">
                    <div class="card">
                        <h4>Direct Competitors</h4>
                        <p>WME, Megantic, Digital Eagles, Titan Digital.</p>
                        <div class="quadrant-container">
                            <span class="label-v">Contract Flexibility</span>
                            <div class="quadrant-grid">
                                <div class="quad-cell"></div><div class="quad-cell"></div>
                                <div class="quad-cell"></div><div class="quad-cell quad-winner">Concise Digital</div>
                            </div>
                            <span class="label-h">Service Breadth</span>
                        </div>
                    </div>
                    <div class="card card-highlight">
                        <h4 class="accent">Competitive Advantage</h4>
                        <p>Concise decisively dominates the <span class="accent">High Flexibility / High Service Breadth</span> quadrant, making it a lower-risk investment for mid-tier clients.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="slide">
            <div class="slide-content">
                <h2 class="accent">Market Opportunity & TAM</h2>
                <div class="grid-2" style="align-items: center;">
                    <div style="text-align: center;">
                        <div style="font-size: clamp(3.5rem, 10vw, 6rem); font-weight: 800; color: var(--text-main); transition: color var(--transition-speed) ease;">~$3.5B</div>
                        <div style="letter-spacing: 0.2em; color: var(--text-secondary); text-transform: uppercase; font-size: 0.875rem; transition: color var(--transition-speed) ease;">AU SME Digital TAM</div>
                    </div>
                    <div class="card">
                        <p style="margin-bottom: 1rem;"><strong style="color: var(--text-main); transition: color var(--transition-speed) ease;">Key Growth Sectors:</strong> E-commerce UX, Cybersecurity, AI-assisted content marketing.</p>
                        <p style="border-left: 4px solid var(--brand-orange); padding-left: 1rem;"><strong class="accent">Strategic Gap:</strong> Bridging technical knowledge gaps for businesses overwhelmed by the fast-paced digital shifts of 2026.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="slide slide-alt">
            <div class="slide-content">
                <h2 class="accent">Proposed Strategic Roadmap</h2>
                <div style="max-width: 700px;">
                    <div class="roadmap-item">
                        <div class="q-badge">Q2</div>
                        <div><h4>Lead Gen Launch</h4><p>Campaigns focusing on 'Future-Proofing Your Digital Footprint'.</p></div>
                    </div>
                    <div class="roadmap-item">
                        <div class="q-badge">Q3</div>
                        <div><h4>AI & CRO Rollout</h4><p>Bespoke optimisation services for existing e-commerce clients.</p></div>
                    </div>
                    <div class="roadmap-item">
                        <div class="q-badge">Q4</div>
                        <div><h4>Platform Partnerships</h4><p>Expand Shopify, WordPress, and Google partnerships for co-marketing leads.</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="slide">
            <div class="slide-content">
                <h2 class="accent">Expected ROI & Next Steps</h2>
                <div class="grid-2" style="margin-bottom: 3rem;">
                    <div class="roi-card"><div class="roi-value">+15%</div><p>Client Retention Increase</p></div>
                    <div class="roi-card"><div class="roi-value">+22%</div><p>Upsell Revenue Growth</p></div>
                </div>
                <div class="card">
                    <h4 style="font-size: 1.5rem; margin-bottom: 1rem;">Immediate Next Steps</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;"><span class="accent">✔</span> Approve the RFQ commercial terms.</li>
                        <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;"><span class="accent">✔</span> Allocate initial budget for strategic market testing.</li>
                        <li style="display: flex; gap: 0.75rem;"><span class="accent">✔</span> Schedule a formal project kick-off call.</li>
                    </ul>
                </div>
                <div class="card" style="margin-top: 2rem;">
                    <h3 class="accent" style="margin-bottom: 1.5rem;">Next Step: Start the Conversation</h3>
                    <form style="display: flex; flex-direction: column; gap: 1rem;">
                        <input type="text" placeholder="Full Name" required
                               style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 0.375rem; background-color: var(--bg-main); color: var(--text-main); font-size: 1rem; transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, color var(--transition-speed) ease;">
                        <input type="email" placeholder="Email Address" required
                               style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 0.375rem; background-color: var(--bg-main); color: var(--text-main); font-size: 1rem; transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, color var(--transition-speed) ease;">
                        <input type="text" placeholder="Company / Brand"
                               style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 0.375rem; background-color: var(--bg-main); color: var(--text-main); font-size: 1rem; transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, color var(--transition-speed) ease;">
                        <textarea placeholder="Message or Project Summary" rows="4"
                                  style="padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 0.375rem; background-color: var(--bg-main); color: var(--text-main); font-size: 1rem; resize: vertical; transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease, color var(--transition-speed) ease;"></textarea>
                        <button type="submit"
                                style="padding: 0.75rem 1.5rem; background-color: var(--brand-orange); color: var(--brand-white); border: none; border-radius: 0.375rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background-color 0.2s ease, opacity 0.2s ease;">
                            Send & Continue
                        </button>
                    </form>
                    <style>
                        /* Input focus styles */
                        form input:focus,
                        form textarea:focus {
                            outline: none;
                            border-color: var(--brand-blue);
                            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                        }
                        /* Placeholder styles */
                        form input::placeholder,
                        form textarea::placeholder {
                            color: var(--brand-grey);
                            opacity: 0.7;
                        }
                        /* Button hover/active */
                        form button:hover { background-color: #E06000; }
                        form button:active { background-color: #C2410C; opacity: 0.9; }
                    </style>
                </div>
            </div>
        </section>
    </main>
    <footer class="presentation-footer">
        <div class="footer-left">
            <img src="https://www.concise.digital/wp-content/uploads/2025/05/Concise-Logo-White.png" alt="Concise Digital" class="footer-logo">
            <div class="controls">
                <button id="prevBtn" class="nav-btn" title="Previous"><svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></button>
                <button id="pauseBtn" class="nav-btn" title="Play/Pause"><span id="pauseIcon" style="font-size: 1.25rem;">⏸</span></button>
                <button id="nextBtn" class="nav-btn" title="Next"><svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>
            </div>
        </div>
        <div class="footer-right">
            <button id="themeToggle" class="nav-btn" title="Toggle Light/Dark Mode">
                <span id="themeIcon" style="font-size: 1.25rem;">🌙</span>
            </button>
        </div>
    </footer>
    <script>
        const container = document.getElementById('slider');
        const slides = document.querySelectorAll('.slide');
        const pauseBtn = document.getElementById('pauseBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const pauseIcon = document.getElementById('pauseIcon');
        let currentSlide = 0; let isPaused = false; let scrollInterval;
        function goToSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            container.scrollTo({
                left: slides[currentSlide].offsetLeft,
                behavior: 'smooth'
            });
            if (!isPaused) startAutoScroll();
        }
        function startAutoScroll() {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(() => { goToSlide(currentSlide + 1); }, 10000);
        }
        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            if (isPaused) clearInterval(scrollInterval); else startAutoScroll();
            pauseIcon.textContent = isPaused ? '▶' : '⏸';
        });
        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
            if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
            if (e.key === ' ') { e.preventDefault(); pauseBtn.click(); }
        });
        startAutoScroll();

        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const htmlElement = document.documentElement;
        function setTheme(theme) {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            setTheme(currentTheme === 'light' ? 'dark' : 'light');
        });
    </script>
</body>
</html>`;

/**
 * DEPLOYMENT FUNCTION
 * Run this in your environment to deploy the RFQ online.
 */
async function deployToVercel(token) {
  const vercelPayload = {
    name: "concise-rfq-presentation",
    files: [
        { file: "index.html", data: rfqHtmlContent },
        { file: "style.css", data: rfqCssContent }
    ],
    projectSettings: { framework: null, installCommand: null, buildCommand: null }
  };

  try {
    const response = await fetch('https://api.vercel.com/v13/deployments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(vercelPayload)
    });

    const data = await response.json();
    if (!response.ok || data.error) {
        console.error("Vercel Error:", data.error?.message || "Deployment failed. Check your token permissions.");
        return;
    }
    console.log("🚀 Deployment Started!");
    console.log("URL:", data.url || `Check your Vercel Dashboard at https://vercel.com/dashboard`);
  } catch (err) {
    console.error("Deployment failed:", err);
  }
}
 
const vercelToken = process.env.VERCEL_TOKEN;
if (!vercelToken) {
  console.error("Vercel token not found. Please set VERCEL_TOKEN in your .env file or environment variables, or pass it directly to deployToVercel(token) if running in a browser.");
} else {
  deployToVercel(vercelToken);
}