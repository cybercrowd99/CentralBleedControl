/**
 * CENTRAL BLEED CONTROL — Turnstile
 *
 * CBCTurnstile is the structural gate between
 * CBCRuleEngine and CBCDecision.
 *
 * It receives evaluated continuity state from
 * CBCRuleEngine and transfers the boundary condition
 * into CBCDecision formation.
 *
 * CBCTurnstile does not contain:
 * - identity
 * - correlation
 * - behavior
 * - authority
 * - surveillance
 * - prediction
 *
 * CBCTurnstile only contains:
 * - doctrine discriminator
 * - structural status
 * - evaluated invariant result
 * - structural path (source → destination)
 * - geometry continuity reference
 * - continuity state
 */

import { CBCRuleEngine } from "./cbc-rule-engine";
import { CBCBleedCheck, CBCInvariant } from "./cbc-types";

export interface CBCTurnstile {
  /**
   * Governing CBC doctrine for passage boundary.
   */
  doctrine: "CentralBleedControl_Turnstile";

  /**
   * Structural artifact discriminator.
   */
  status: "CBC_TURNSTILE";

  /**
   * Structural path preserved for decision formation.
   */
  source: string;
  destination: string;

  /**
   * Evaluated invariant.
   */
  invariant: CBCInvariant;

  /**
   * Structural continuity state.
   */
  allowed: boolean;

  /**
   * Optional bleed classification.
   */
  bleedType?: CBCBleedCheck["bleedType"];

  /**
   * Structural continuity geometry.
   * Never identity-bearing.
   */
  geometry: Record<string, unknown>;
}

/**
 * Build a CBCTurnstile artifact.
 *
 * This function transfers evaluated continuity
 * state from CBCRuleEngine into the CBCDecision
 * boundary.
 *
 * It does not evaluate rules,
 * modify invariants,
 * correlate sources,
 * enrich continuity,
 * or create authority.
 */
export function buildCBCTurnstile(
  ruleEngine: CBCRuleEngine
): CBCTurnstile {
  return {
    doctrine: "CentralBleedControl_Turnstile",
    status: "CBC_TURNSTILE",

    source: ruleEngine.transition.source,
    destination: ruleEngine.transition.destination,

    invariant: ruleEngine.result.invariant,

    allowed: ruleEngine.result.allowed,
    bleedType: ruleEngine.result.bleedType,

    geometry: ruleEngine.result.geometry
  };
}
