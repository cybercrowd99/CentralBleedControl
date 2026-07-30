/**
 * CENTRAL BLEED CONTROL — Transition
 *
 * CBCTransition is the bridge artifact between CBCSurface
 * and CBCRuleEngine.
 *
 * It receives the completed surface boundary state and
 * transfers structural continuity into rule evaluation.
 *
 * CBCTransition does not contain:
 * - identity
 * - correlation
 * - behavior
 * - authority
 * - surveillance
 * - prediction
 *
 * CBCTransition only contains:
 * - doctrine discriminator
 * - structural status
 * - surface verdict
 * - structural path (source → destination)
 * - geometry continuity reference
 */

import { CBCBleedCheck } from "./cbc-types";

export interface CBCTransition {
  doctrine: "CentralBleedControl_TransitionBoundary";
  status: "CBC_TRANSITION_ACTIVE";

  /**
   * Surface verdict (allowed / bleedType).
   * Never identity-bearing.
   */
  surfaceVerdict: Pick<CBCBleedCheck, "allowed" | "bleedType">;

  /**
   * Structural path preserved for rule evaluation.
   */
  source: string;
  destination: string;

  /**
   * Structural continuity geometry.
   * Never identity-bearing.
   */
  geometry: Record<string, unknown>;
}

/**
 * Build a CBCTransition artifact.
 *
 * This function transfers surface state into
 * the rule engine boundary.
 *
 * It does not evaluate rules,
 * modify verdicts,
 * correlate sources,
 * or create authority.
 */
export function buildCBCTransition(
  surfaceCheck: CBCBleedCheck,
  geometry: Record<string, unknown>
): CBCTransition {
  return {
    doctrine: "CentralBleedControl_TransitionBoundary",
    status: "CBC_TRANSITION_ACTIVE",

    surfaceVerdict: {
      allowed: surfaceCheck.allowed,
      bleedType: surfaceCheck.bleedType
    },

    source: surfaceCheck.source,
    destination: surfaceCheck.destination,

    geometry
  };
}
