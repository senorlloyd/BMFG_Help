# CAD Mini Golf

Students model a mini golf hole in Onshape, export it as GLB, and play it in the browser.
Teachers can string student holes into a course with a scorecard and a class leaderboard.

## Student quick start

[![CAD Mini Golf quick start: build in Onshape, export GLB, load, play](quickstart.png)](quickstart.pdf)

Click the image for a printable one-page PDF ([quickstart.pdf](quickstart.pdf)).

## What's in this repo

```
index.html            the game (students use this)
builder.html          the course builder (teacher only, not linked from the game)
courses/
  index.json          the list of published courses (starts as [])
  *.golfcourse        one file per published course
quickstart.png        the one-page student guide (image)
quickstart.pdf        the same guide, ready to print
leaderboard/
  Code.gs             Google Apps Script for the class leaderboard (not used by the site directly)
```

## 1. Update the site

Upload `index.html`, `builder.html`, `quickstart.png`, `quickstart.pdf`, and the `courses` folder to the repo, replacing the old `index.html`.
GitHub Pages republishes in a minute or two.

## 2. Set up the class leaderboard (once)

1. Create a new Google Sheet, for example "CAD Mini Golf Scores".
2. Choose **Extensions → Apps Script**. Delete what's there and paste in all of `leaderboard/Code.gs`.
3. Change `CLASS_CODE` at the top to a word of your choosing, then click **Save**.
4. Click **Deploy → New deployment**. Click the gear next to "Select type" and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, approve the permissions Google asks for, and copy the **Web app URL** (it ends in `/exec`).

Scores appear in a **Scores** tab in the sheet: date, course, initials, strokes, par, seconds.
Delete any row to remove a score.

If "Anyone" isn't offered in step 4, your district has limited who web apps can be shared with.
You can host the sheet in a personal Google account instead; it stores only initials and scores.

If you ever change the script, use **Deploy → Manage deployments → Edit → Version: New version** so the URL stays the same.

## 3. Build and publish a course

1. Go to `https://<your-site>/builder.html`. It isn't linked from the game, so bookmark it.
2. Drop in student `.golfhole` files. Plain `.glb` exports work too.
3. Put the holes in order, rename them if you like, set par for each, and use **Test** to check one in the game.
4. Name the course. Paste the leaderboard Web app URL and your class code. The builder remembers them for next time.
5. Click **Download course file**, then **Download updated course list**.
6. On GitHub, open the `courses` folder, choose **Add file → Upload files**, drop in both files, and commit.

The course appears under **Play a course** in the game after a minute or two.

To change a course, drop its `.golfcourse` file back into the builder, edit it, and publish again with the same name.
Tick **Start a fresh leaderboard** if the holes changed enough that old scores aren't comparable.
To take a course off the menu, click **Remove** next to it in the builder, download the updated course list, and upload it.

## How scoring works

- Each hole is scored against its par. The course total is strokes and strokes over or under par.
- The clock runs only while a hole is in play; the course time is the sum of the hole times.
- At the end, players enter three initials. Two boards are kept per course: **fewest strokes** (time breaks ties) and **fastest**.
  Each set of initials appears once per board, with its best score.
- Without a leaderboard URL, scores are kept on each Chromebook instead.

## Good to know

- The builder page isn't secret, but only people with write access to this repo can publish a course. Students can't.
- The class code is included in each course file, so it stops casual spam rather than a determined student.
  Since you own the sheet, removing a bad entry takes a second.
- A small list of rude three-letter combinations is turned into `???` before it's saved. Add to `BLOCKED` in the script as needed.
- Nothing about students is stored except the three initials they type.
