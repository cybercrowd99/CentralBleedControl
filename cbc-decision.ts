/**
 * CENTRAL BLEED CONTROL — Decision
 *
 * CBCDecision is the sealed verdict artifact produced
 * from CBCTurnstile.
 *
 * It is the boundary artifact between:
 *
 * CBCTurnstile
 *        ↓
 * CBCDecision
 *        ↓
 * CBCExitState
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
 * - doctrine discriminator
 * - structural status
 * - continuity verdict
 * - invariant reference
 * - optional bleed classification
 * - structural message
 */

import { CBCTurnstile } from "./cbc-turnstile";
import { CBCBleedCheck, CBCInvariant } from "./cbc-types";

export interface CBCDecision {
  /**
   * Governing CBC doctrine for decision boundary.
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
   * Invariant used during continuity evaluation.
   */
  invariant: CBCInvariant;

  /**
   * Optional structural bleed classification.
   */
  bleedType?: CBCBleedCheck["bleedType"];

  /**
   * Structural explanation of decision.
   * Never identity-bearing.
   */
  message: string;
}

/**
 * Build a CBCDecision artifact.
 *
 * This function seals the CBCTurnstile result.
 *
 * It does not:
 * - evaluate rules
 * - modify invariants
 * - correlate sources
 * - enrich continuity
 * - create authority
 *
 * CBCDecision only seals the already evaluated
 * structural continuity result.
 */
export function buildCBCDecision(
  turnstile: CBCTurnstile,
  message: string
): CBCDecision {
  const artifact: CBCDecision = {
    doctrine: "CentralBleedControl_Decision",
    status: "CBC_DECISION",

    allowed: turnstile.allowed,

    invariant: turnstile.invariant,

    bleedType: turnstile.bleedType,

    message
  };

  return Object.freeze(artifact);
}
