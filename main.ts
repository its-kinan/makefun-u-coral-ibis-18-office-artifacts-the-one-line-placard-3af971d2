// Office Artifacts: The One-Line Placard Contest.
// Writes a single museum placard line for an ordinary office object
// treated as an ancient artifact, to /output/entry.txt.
// Deterministic: fixed text, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised line: cut the window / open-plan temple clause, the second
// reorganisation, and "ever set before it". Every remaining word earns
// its place: catalogue (fern, plastic, c. 2015), conceit (sacred green
// thing, watered only by guilt), payoff (outlived three managers and
// every deadline), museum kicker (donor unknown, presumed promoted).
const PLACARD =
  "Fern, plastic, c. 2015. Sacred green thing, watered only by guilt. It outlived three managers and every deadline. Donor unknown, presumed promoted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
