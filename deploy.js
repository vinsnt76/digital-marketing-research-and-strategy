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

const rfqHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RFQ Strategy: Concise Digital 2026</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #0f172a; color: #f8fafc; overflow: hidden; }
        .slide { min-height: 100vh; min-width: 100vw; flex-shrink: 0; display: flex; flex-direction: column; justify-content: center; padding: 4rem; border-right: 1px solid #1e293b; }
        .accent { color: #10b981; }
    </style>
</head>
<body class="flex transition-transform duration-700 ease-in-out">
    <!-- Slide 1 -->
    <section class="slide">
        <h1 class="text-5xl font-bold mb-4">Executive Summary & <span class="accent">Current Positioning</span></h1>
        <p class="text-xl text-slate-400 mb-8">Overview: Concise Digital stands out through unyielding transparency, local expertise, and comprehensive service offerings.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div class="p-6 bg-slate-800 rounded-xl border border-slate-700">
                <h3 class="text-xl font-semibold mb-2 accent">Current Positioning</h3>
                <p>A highly capable, all-in-one digital partner for SMEs, proudly operating without lock-in contracts.</p>
            </div>
            <div class="p-6 bg-slate-800 rounded-xl border border-slate-700">
                <h3 class="text-xl font-semibold mb-2 accent">Market Context (Apr 2026)</h3>
                <p>Highlighting technological adaptability whilst maintaining a strong, human-centric support model as agencies pivot to automation.</p>
            </div>
        </div>
    </section>

    <!-- Slide 2 -->
    <section class="slide bg-slate-900">
        <h2 class="text-4xl font-bold mb-8 accent">Competitor Landscape</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="p-6 border border-slate-700 rounded-lg bg-slate-800">
                <h4 class="font-bold text-xl mb-2">Direct Competitors</h4>
                <p class="text-slate-400">WME, Megantic, Digital Eagles, Titan Digital.</p>
            </div>
            <div class="relative p-6 border border-slate-700 rounded-lg bg-slate-800/50 h-64">
                <!-- Main Axis Titles -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 text-sm text-slate-400 font-semibold -mt-4">Service Breadth</div>
                <div class="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-sm text-slate-400 font-semibold -ml-4">Contract Flexibility</div>

                <!-- Grid container -->
                <div class="relative w-full h-full grid grid-cols-2 grid-rows-2 border border-slate-700">
                    <!-- Quadrants -->
                    <div class="border-r border-b border-slate-700 flex items-center justify-center text-slate-500 text-xs">
                        <!-- Low Flex / Low Breadth -->
                    </div>
                    <div class="border-b border-slate-700 flex items-center justify-center text-slate-500 text-xs">
                        <!-- Low Flex / High Breadth -->
                    </div>
                    <div class="border-r border-slate-700 flex items-center justify-center text-slate-500 text-xs">
                        <!-- High Flex / Low Breadth -->
                    </div>
                    <div class="flex items-center justify-center relative bg-emerald-500/20 border border-emerald-500/50 rounded-md m-1">
                        <span class="text-emerald-300 font-bold text-base">Concise Digital</span>
                        <div class="absolute w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>

                    <!-- High/Low indicators for Service Breadth (horizontal) -->
                    <div class="absolute -bottom-6 left-0 text-xs text-slate-500">Low</div>
                    <div class="absolute -bottom-6 right-0 text-xs text-slate-500">High</div>

                    <!-- High/Low indicators for Contract Flexibility (vertical) -->
                    <div class="absolute -left-6 top-0 text-xs text-slate-500">High</div>
                    <div class="absolute -left-6 bottom-0 text-xs text-slate-500">Low</div>
                </div>
            </div>
        </div>
        <div class="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <h4 class="text-2xl font-bold mb-2">Competitive Advantage</h4>
            <p class="text-xl">Concise decisively dominates the <span class="accent font-semibold">High Flexibility / High Service Breadth</span> quadrant, making it a lower-risk investment for mid-tier clients.</p>
        </div>
    </section>

    <!-- Slide 3 -->
    <section class="slide">
        <h2 class="text-4xl font-bold mb-8 accent">Market Opportunity & TAM</h2>
        <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="text-center shrink-0">
                <div class="text-7xl font-bold">~$3.5B</div>
                <div class="text-slate-500 uppercase tracking-widest mt-2">AU SME Digital TAM</div>
            </div>
            <div class="space-y-4">
                <p class="text-slate-300 text-xl"><span class="font-bold text-white">Key Growth Sectors:</span> E-commerce UX, Cybersecurity, AI-assisted content marketing.</p>
                <p class="text-slate-300 text-xl border-l-4 border-emerald-500 pl-4"><span class="accent font-bold">Strategic Gap:</span> Bridging technical knowledge gaps for businesses overwhelmed by the fast-paced digital shifts of 2026.</p>
            </div>
        </div>
    </section>

    <!-- Slide 4 -->
    <section class="slide bg-slate-900">
        <h2 class="text-4xl font-bold mb-8 accent">Proposed Strategic Roadmap</h2>
        <div class="space-y-6">
            <div class="flex gap-4">
                <div class="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold shrink-0">Q2</div>
                <div><h4 class="text-xl font-bold">Lead Gen Launch</h4><p class="text-slate-400">Campaigns focusing on 'Future-Proofing Your Digital Footprint'.</p></div>
            </div>
            <div class="flex gap-4">
                <div class="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold shrink-0">Q3</div>
                <div><h4 class="text-xl font-bold">AI & CRO Rollout</h4><p class="text-slate-400">Bespoke optimisation services for existing e-commerce clients.</p></div>
            </div>
            <div class="flex gap-4">
                <div class="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold shrink-0">Q4</div>
                <div><h4 class="text-xl font-bold">Platform Partnerships</h4><p class="text-slate-400">Expand Shopify, WordPress, and Google partnerships for co-marketing leads.</p></div>
            </div>
        </div>
    </section>

    <!-- Slide 5 -->
    <section class="slide">
        <h2 class="text-4xl font-bold mb-4 accent">Expected ROI & Next Steps</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="p-8 bg-emerald-500/10 border border-emerald-500/50 rounded-2xl">
                <div class="text-5xl font-bold accent">+15%</div>
                <div class="mt-2 text-slate-400">Client Retention Increase</div>
            </div>
            <div class="p-8 bg-emerald-500/10 border border-emerald-500/50 rounded-2xl">
                <div class="text-5xl font-bold accent">+22%</div>
                <div class="mt-2 text-slate-400">Upsell Revenue Growth</div>
            </div>
        </div>
        <div class="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h4 class="text-2xl font-bold mb-4">Immediate Next Steps</h4>
            <ul class="list-disc list-inside space-y-2 text-slate-300">
                <li>Approve the RFQ commercial terms.</li>
                <li>Allocate initial budget for strategic market testing.</li>
                <li>Schedule a formal project kick-off call.</li>
            </ul>
        </div>
    </section>

    <!-- Navigation Controls -->
    <div class="fixed bottom-8 right-8 z-50 flex items-center gap-2 p-2 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-full shadow-xl">
        <button id="prevBtn" class="p-3 hover:bg-slate-700 rounded-full transition-colors" title="Previous">
            <span class="text-xl">⬅️</span>
        </button>
        <button id="pauseBtn" class="p-3 hover:bg-slate-700 rounded-full transition-colors" title="Play/Pause">
            <span id="pauseIcon" class="text-xl">⏸️</span>
        </button>
        <button id="nextBtn" class="p-3 hover:bg-slate-700 rounded-full transition-colors" title="Next">
            <span class="text-xl">➡️</span>
        </button>
    </div>

    <script>
        const slides = document.querySelectorAll('.slide');
        const pauseBtn = document.getElementById('pauseBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const pauseIcon = document.getElementById('pauseIcon');
        let currentSlide = 0;
        let isPaused = false;
        let scrollInterval;

        function goToSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].scrollIntoView({ behavior: 'smooth', inline: 'start' });
            if (!isPaused) startAutoScroll();
        }

        function startAutoScroll() {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 10000);
        }

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            if (isPaused) clearInterval(scrollInterval);
            else startAutoScroll();
            pauseIcon.textContent = isPaused ? '▶️' : '⏸️';
        });

        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

        startAutoScroll();
    </script>
</body>
</html>
`;

/**
 * DEPLOYMENT FUNCTION
 * Run this in your environment to deploy the RFQ online.
 */
async function deployToVercel(token) {
  const vercelPayload = {
    name: "concise-rfq-presentation",
    files: [{ file: "index.html", data: rfqHtmlContent }],
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