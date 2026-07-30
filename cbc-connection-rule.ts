/**
 * CENTRAL BLEED CONTROL — Connection Rule
 *
 * CBCConnectionRule binds structural continuity from CBCTransition
 * into a connection boundary consumed by CBCRuleEngine.
 *
 * CBCConnectionRule does not contain:
 * - identity
 * - correlation
 * - behavior
 * - authority
 * - surveillance
 * - prediction
 *
 * CBCConnectionRule only contains:
 * - doctrine discriminator
 * - structural status
 * - structural path (source → destination)
 * - surface verdict continuity
 * - geometry continuity reference
 */

import { CBCTransition } from "./cbc-transition";

export interface CBCConnectionRule {
  /**
   * Governing CBC doctrine for connection boundary formation.
   */
  doctrine: "CentralBleedControl_ConnectionRule";

  /**
   * Structural artifact discriminator.
   */
  status: "CBC_CONNECTION_RULE";

  /**
   * Structural path preserved for invariant evaluation.
   */
  source: string;
  destination: string;

  /**
   * Surface verdict continuity.
   */
  surfaceVerdict: CBCTransition["surfaceVerdict"];

  /**
   * Structural continuity geometry.
   * Never identity-bearing.
   */
  geometry: CBCTransition["geometry"];
}

/**
 * Build a CBCConnectionRule artifact.
 *
 * This function binds structural continuity from
 * CBCTransition into the rule evaluation boundary.
 *
 * It does not evaluate rules,
 * does not seal verdicts,
 * does not correlate,
 * does not enrich,
 * and does not create authority.
 */
export function buildCBCConnectionRule(
  transition: CBCTransition
): CBCConnectionRule {
  return {
    doctrine: "CentralBleedControl_ConnectionRule",
    status: "CBC_CONNECTION_RULE",

    source: transition.source,
    destination: transition.destination,

    surfaceVerdict: transition.surfaceVerdict,
    geometry: transition.geometry
  };
}
