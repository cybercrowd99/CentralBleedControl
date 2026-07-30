/**
 * CENTRAL BLEED CONTROL — Decision
 *
 * CBCDecision is the verdict artifact produced by CBCTurnstile.
 * It is upstream of CBCExitState and downstream of CBCConnectionRule.
 *
 * CBCDecision does not contain:
 * - identity
 * - correlation
 * - behavior
 * - authority
 * - surveillance
 * - prediction
 *
 * CBCDecision only contains:
 * - continuity verdict
 * - invariant reference
 * - optional bleed classification
 * - structural message
 *
 * CBCDecision is the ONLY artifact permitted to cross upward
 * into CORE continuity intake.
 *
 * CBCDecision is the diplomatic boundary object between:
 *   CBC → CORE → NET
 *
 * CBCDecision does NOT store, route, correlate, enrich, or identify.
 * It is a sealed verdict.
 */

import {
  CBCInvariant,
  CBCBleedCheck
} from "./cbc-types";

export interface CBCDecision {
  /**
   * Governing CBC doctrine for decision-level enforcement.
   */
  doctrine: "CentralBleedControl_Decision";

  /**
   * Structural artifact discriminator.
   */
  status: "CBC_DECISION";

  /**
   * Final continuity decision.
   */
  allowed: boolean;

  /**
   * Invariant used to determine the decision.
   */
  invariant: CBCInvariant;

  /**
   * Optional classification when continuity fails.
   */
  bleedType?: CBCBleedCheck["bleedType"];

  /**
   * Structural explanation of the decision.
   */
  message: string;
}

/**
 * Build a CBCDecision artifact.
 *
 * This function seals the Turnstile verdict.
 * It does not evaluate, enrich, correlate, or identify.
 *
 * This is the ONLY function whose output is permitted
 * to enter CORE continuity intake.
 */
export function buildCBCDecision(
  allowed: boolean,
  invariant: CBCInvariant,
  message: string,
  bleedType?: CBCBleedCheck["bleedType"]
): CBCDecision {
  return {
    doctrine: "CentralBleedControl_Decision",
    status: "CBC_DECISION",

    allowed,
    invariant,
    bleedType,
    message
  };
}
