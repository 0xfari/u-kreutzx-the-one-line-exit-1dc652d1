import * as fs from "node:fs";
import * as path from "node:path";

// The One-Line Exit: the funniest single-line resignation letter, 1-140 chars.
// The joke bets on a familiar office phrase turning on itself.
const OPENING = "I resign, effective today: ";
const BODY =
  "after five years of saying 'per my last email', I have decided to send my last email.";
const LINE = OPENING + BODY;

function clearFolder(dir: string): void {
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
clearFolder(outDir);
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
