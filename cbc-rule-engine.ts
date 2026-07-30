/**
 * CENTRAL BLEED CONTROL — Rule Engine
 *
 * CBCRuleEngine receives CBCTransition and applies
 * declared CBC rule evaluation before connection enforcement.
 *
 * CBCRuleEngine does not contain:
 * - identity
 * - correlation
 * - behavior
 * - authority
 * - surveillance
 * - prediction
 *
 * CBCRuleEngine only contains:
 * - doctrine discriminator
 * - structural status
 * - transition boundary input
 * - rule evaluation function
 * - structural rule result
 */

import { CBCBleedCheck } from "./cbc-types";

export interface CBCRuleEngine {
  /**
   * Governing CBC doctrine for rule evaluation.
   */
  doctrine: "CentralBleedControl_RuleEngine";

  /**
   * Structural artifact discriminator.
   */
  status: "CBC_RULE_ENGINE_ACTIVE";

  /**
   * Transition state entering rule evaluation.
   */
  transition: {
    source: string;
    destination: string;
    allowed: boolean;
    bleedType?: CBCBleedCheck["bleedType"];
  };

  /**
   * Structural rule evaluation result.
   * Does not create final CBCDecision.
   */
  result: CBCBleedCheck;
}

/**
 * Build a CBCRuleEngine artifact.
 *
 * This function evaluates transition structure only.
 * It does not create identity, authority,
 * correlation, surveillance, prediction,
 * or final verdicts.
 */
export function buildCBCRuleEngine(
  transition: {
    source: string;
    destination: string;
    allowed: boolean;
    bleedType?: CBCBleedCheck["bleedType"];
  }
): CBCRuleEngine {
  return {
    doctrine: "CentralBleedControl_RuleEngine",
    status: "CBC_RULE_ENGINE_ACTIVE",

    transition,

    result: {
      source: transition.source,
      destination: transition.destination,
      allowed: transition.allowed,
      bleedType: transition.bleedType
    }
  };
}
