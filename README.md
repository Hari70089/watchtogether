# 🎬 WatchTogether

2-person private movie watch party.
**Host** uploads video & controls it. **Guest** just watches in sync.

---

## 🌐 Deploy Free on Railway (Different WiFi / Different Cities)

### Step 1 — Upload to GitHub
1. Go to [github.com](https://github.com) → Sign up / Login
2. Click **New Repository** → name it `watchtogether` → Create
3. Upload all files from this zip (drag & drop in GitHub)

### Step 2 — Deploy on Railway
1. Go to [railway.app](https://railway.app) → Login with GitHub
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select your `watchtogether` repo
4. Railway auto-detects Node.js and deploys!
5. Click **"Generate Domain"** → you get a free URL like:
   ```
   https://watchtogether-production.up.railway.app
   ```

### Step 3 — Share the link
Both Person 1 and Person 2 open that URL on their phones — done! 🎉

---

## 💻 Run Locally (Same WiFi)

```bash
npm install
npm start
# Open: http://localhost:3000
```

---

## How to Use

**Person 1 (Host):**
1. Open the app URL
2. See the 4-letter room code
3. Click **Create Room**
4. Share the code with Person 2
5. Upload your video file
6. Press Play — Person 2 sees it instantly!

**Person 2 (Guest):**
1. Open the same app URL
2. Type the 4-letter code
3. Click **Join Room**
4. Watch as host controls everything!

---

## Controls (Host Only)
| Button | Action |
|--------|--------|
| ▶️ / ⏸ | Play / Pause |
| ⏪ | Back 10 seconds |
| ⏩ | Forward 10 seconds |
| 🔇 | Mute / Unmute |
| ⏹ | Stop & reset |
| Progress bar | Click anywhere to seek |

---

## Why Different WiFi Works
The app runs on a **cloud server** (Railway). Both phones connect to that server over the internet — WiFi or mobile data, anywhere in the world. ✅
