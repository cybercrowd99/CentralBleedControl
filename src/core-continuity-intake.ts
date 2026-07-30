/**
 * CORE CONTINUITY INTAKE
 *
 * CoreContinuityIntake is the first CORE boundary artifact
 * receiving the sealed CBCDecision verdict.
 *
 * It is the transition point:
 *
 * CBC → CORE
 *
 * CoreContinuityIntake does not:
 * - evaluate CBC rules
 * - modify decisions
 * - enrich continuity data
 * - identify sources
 * - route connections
 * - store runtime state
 *
 * It only:
 * - receives the sealed CBCDecision artifact
 * - preserves continuity boundary state
 * - hands the verdict into CORE interpretation
 *
 * Flow:
 *
 * CBCDecision
 *      ↓
 * CORE Continuity Intake
 *      ↓
 * CORE Sovereignty Interpreter
 */

import {
  CBCDecision
} from "./cbc-decision";

export interface CoreContinuityIntake {
  /**
   * Governing CORE doctrine.
   */
  doctrine: "CORE_Continuity_Intake";

  /**
   * Structural artifact discriminator.
   */
  status: "CORE_CONTINUITY_INTAKE";

  /**
   * Sealed CBC verdict.
   */
  decision: CBCDecision;

  /**
   * Preserved boundary origin.
   */
  source: "CBC";

  /**
   * CORE receiving boundary.
   */
  destination: "CORE";
}

/**
 * Build CORE Continuity Intake artifact.
 *
 * This function receives the sealed CBC verdict.
 * It does not evaluate, alter, enrich, or identify.
 */
export function buildCoreContinuityIntake(
  decision: CBCDecision
): CoreContinuityIntake {
  return {
    doctrine: "CORE_Continuity_Intake",
    status: "CORE_CONTINUITY_INTAKE",

    decision,

    source: "CBC",
    destination: "CORE"
  };
}
