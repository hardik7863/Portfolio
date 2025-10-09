
---

## 🚀 Whenever You Change Code (Future Updates)

### ✅ Step-by-Step Workflow

#### 🧩 1. Make your changes

Edit your code in the **`main` branch** —
(e.g. update a project, fix a bug, change text, etc.)

#### 🧩 2. Save and commit your changes

```bash
git add .
git commit -m "Updated portfolio projects section"
git push origin main
```

This keeps your **main branch** (source code) up to date on GitHub.

#### 🧩 3. Redeploy your site

Now rebuild and publish your updated site to GitHub Pages:

```bash
npm run deploy
```

That’s it.
This command will:

* Rebuild your app with the latest changes (`npm run build`)
* Push the new `/dist` output to the **`gh-pages`** branch
* GitHub Pages will auto-update your live website

---

### 🕒 Step 4 (Automatic)

Wait **30–60 seconds**, then visit your site again:
👉 [https://hardikloves.fun](https://hardikloves.fun)

You’ll see your updated portfolio live 🚀

---

## 💡 Quick Summary

| Task                 | Command                                | Purpose                       |
| -------------------- | -------------------------------------- | ----------------------------- |
| Add & commit changes | `git add . && git commit -m "message"` | Save work locally             |
| Push code            | `git push origin main`                 | Sync your source code         |
| Deploy new version   | `npm run deploy`                       | Rebuild and publish live site |

---

## 🧠 Optional Pro Tip

If you make **frequent updates**, you can combine everything in one go:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

💨 In 10 seconds — your site will be updated online.

