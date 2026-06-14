const $ = (id) => document.getElementById(id);

let state = {
  n: 8,
  k: 4,
  labels: ["A", "B", "C", "D"],
  candidates: [],
  history: [],
  secret: null,
};

function score(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) if (a[i] === b[i]) s++;
  return s;
}

function generateAll(n, labels) {
  const out = [];
  const rec = (prefix, depth) => {
    if (depth === n) { out.push(prefix); return; }
    for (const label of labels) rec(prefix + label, depth + 1);
  };
  rec("", 0);
  return out;
}

function parseSettings() {
  const n = Math.max(1, Math.min(12, Number($("nQuestions").value || 8)));
  const labels = Array.from($("labels").value.trim()).filter(Boolean);
  const k = Math.max(2, Math.min(8, Number($("nChoices").value || labels.length || 4)));
  const finalLabels = labels.length >= k ? labels.slice(0, k) : "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, k).split("");
  return { n, k, labels: finalLabels };
}

function reset() {
  const { n, k, labels } = parseSettings();
  state.n = n;
  state.k = k;
  state.labels = labels;
  $("labels").value = labels.join("");
  $("scoreMax").textContent = `/ ${n}`;
  $("guessInput").value = labels[0].repeat(n);
  $("publicScore").textContent = "-";
  state.candidates = generateAll(n, labels);
  state.history = [];
  randomSecret(false);
  $("recommendDetails").open = false;
  $("partitionDetails").open = false;
  $("partition").innerHTML = "";
  $("bestGuess").textContent = "計算前";
  $("validation").textContent = "";
  render();
}

function validateGuess(g) {
  if (g.length !== state.n) return `回答は${state.n}文字にしてください。`;
  for (const ch of g) if (!state.labels.includes(ch)) return `使える文字は ${state.labels.join("")} だけです。`;
  return "";
}

function submitAnswer() {
  const guess = $("guessInput").value.trim().toUpperCase();
  const err = validateGuess(guess);
  if (err) { $("validation").textContent = err; return; }
  if (!state.secret) randomSecret(false);

  const scoreValue = score(state.secret, guess);
  $("publicScore").textContent = String(scoreValue);

  const before = state.candidates.length;
  state.candidates = state.candidates.filter(c => score(c, guess) === scoreValue);
  state.history.push({ guess, score: scoreValue, remaining: state.candidates.length, before });

  $("validation").textContent = scoreValue === state.n ? "満点です。" : "";
  $("recommendDetails").open = false;
  $("partitionDetails").open = false;
  render();
}

function randomSecret(showMessage = true) {
  state.secret = Array.from({ length: state.n }, () => state.labels[Math.floor(Math.random() * state.k)]).join("");
  $("secretText").textContent = `正解: ${state.secret}`;
  $("secretDetails").open = false;
  if (showMessage) $("validation").textContent = "問題をリセットしました。";
}

function partitionForGuess(guess, candidates = state.candidates) {
  const buckets = Array(state.n + 1).fill(0);
  for (const c of candidates) buckets[score(c, guess)]++;
  return buckets;
}

function recommend() {
  if (state.candidates.length === 0) return;
  const button = $("recommendBtn");
  button.disabled = true;
  button.textContent = "計算中...";

  setTimeout(() => {
    const searchSpace = state.candidates.length <= 3000 ? state.candidates : sampleCandidates(state.candidates, 3000);
    let best = null;
    let bestWorst = Infinity;
    let bestExpected = Infinity;
    let bestBuckets = null;

    for (const g of searchSpace) {
      const buckets = partitionForGuess(g);
      const worst = Math.max(...buckets);
      const expected = buckets.reduce((sum, b) => sum + b * b, 0) / state.candidates.length;
      if (worst < bestWorst || (worst === bestWorst && expected < bestExpected)) {
        best = g; bestWorst = worst; bestExpected = expected; bestBuckets = buckets;
      }
    }

    $("bestGuess").textContent = best;
    $("recommendDetails").open = false;
    $("partitionDetails").open = false;
    renderPartition(bestBuckets);
    $("recommendNote").textContent = state.candidates.length > 3000
      ? `候補が多いため3000件をサンプルして計算。最悪ケース推定: ${bestWorst.toLocaleString()}候補。`
      : `最悪ケース: ${bestWorst.toLocaleString()}候補、期待残候補: ${bestExpected.toFixed(1)}。`;
    button.disabled = false;
    button.textContent = "おすすめを計算";
  }, 20);
}

function sampleCandidates(arr, size) {
  if (arr.length <= size) return arr;
  const out = [];
  const step = arr.length / size;
  for (let i = 0; i < size; i++) out.push(arr[Math.floor(i * step)]);
  return out;
}

function renderPartition(buckets) {
  const max = Math.max(1, ...buckets);
  $("partition").innerHTML = buckets.map((b, i) => `
    <div class="bar-row">
      <span>${i}点</span>
      <div class="bar"><span style="width:${(b / max) * 100}%"></span></div>
      <span>${b.toLocaleString()}</span>
    </div>`).join("");
}

function render() {
  $("candidateCount").textContent = state.candidates.length.toLocaleString();
  $("turnCount").textContent = state.history.length.toLocaleString();
  $("entropyBound").textContent = Math.ceil(Math.log(Math.pow(state.k, state.n)) / Math.log(state.n + 1));
  $("candidateSample").textContent = state.candidates.slice(0, 40).join("\n") + (state.candidates.length > 40 ? "\n..." : "");
  $("historyBody").innerHTML = state.history.map((h, i) => `
    <tr><td>${i + 1}</td><td><code>${h.guess}</code></td><td>${h.score}</td><td>${h.remaining.toLocaleString()}</td></tr>
  `).join("");
  if (state.candidates.length === 1) {
    $("bestGuess").textContent = state.candidates[0];
    $("recommendDetails").open = false;
  }
}

function copyBestToInput() {
  const best = $("bestGuess").textContent.trim();
  if (!best || best === "計算前") return;
  $("guessInput").value = best;
  $("validation").textContent = "推薦手を回答欄にコピーしました。";
}

$("resetBtn").addEventListener("click", reset);
$("submitBtn").addEventListener("click", submitAnswer);
$("randomSecretBtn").addEventListener("click", () => { randomSecret(true); render(); });
$("recommendBtn").addEventListener("click", recommend);
$("copyBestBtn").addEventListener("click", copyBestToInput);
$("guessInput").addEventListener("input", () => { $("guessInput").value = $("guessInput").value.toUpperCase(); });
$("guessInput").addEventListener("keydown", (e) => { if (e.key === "Enter") submitAnswer(); });

reset();
