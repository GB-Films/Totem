import { describe, expect, it } from "vitest";
import {
  addDaysIso,
  getInclusiveDays,
  hasOperationalEndpoints,
  rangesOverlap,
} from "./dates";

describe("date helpers", () => {
  it("counts rental days inclusively", () => {
    expect(getInclusiveDays("2026-07-28", "2026-07-30")).toBe(3);
  });

  it("does not accept a reversed range", () => {
    expect(getInclusiveDays("2026-07-30", "2026-07-28")).toBe(1);
  });

  it("detects touching and nested overlaps", () => {
    expect(rangesOverlap("2026-07-28", "2026-07-30", "2026-07-30", "2026-08-02")).toBe(true);
    expect(rangesOverlap("2026-07-28", "2026-07-29", "2026-07-30", "2026-08-02")).toBe(false);
  });

  it("adds calendar days without shifting the ISO date", () => {
    expect(addDaysIso("2026-12-31", 1)).toBe("2027-01-01");
  });

  it("requires operational pickup and return dates", () => {
    expect(hasOperationalEndpoints("2026-07-28", "2026-07-30")).toBe(true);
    expect(hasOperationalEndpoints("2026-08-01", "2026-08-03")).toBe(false);
  });
});
