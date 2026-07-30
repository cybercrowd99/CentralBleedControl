/**
 * CENTRAL BLEED CONTROL — Exit State
 *
 * CBCExitState is the final stable boundary artifact.
 *
 * It represents the condition after CBC continuity
 * verification has completed and no bleed remains.
 *
 * CBCExitState does not contain:
 * - identity
 * - correlation
 * - behavior
 * - authority
 * - surveillance
 * - prediction
 *
 * CBCExitState only contains:
 * - doctrine discriminator
 * - structural status
 * - final continuity state
 * - structural message
 */

export interface CBCExitState {
  /**
   * Governing CBC doctrine for final exit boundary.
   */
  doctrine: "CentralBleedControl_ExitBoundary";

  /**
   * Structural artifact discriminator.
   */
  status: "CBC_EXIT_STATE";

  /**
   * Final continuity condition.
   *
   * EXIT is only valid when no bleed remains.
   * Never predictive, never probabilistic.
   */
  stable: boolean;

  /**
   * Structural explanation of exit state.
   * Never identity-bearing.
   */
  message: string;
}

/**
 * Build a CBCExitState artifact.
 *
 * This function creates the final CBC stability boundary.
 *
 * It does not:
 * - evaluate rules
 * - create decisions
 * - modify continuity
 * - correlate sources
 * - create authority
 *
 * CBCExitState is a terminal artifact and may only apply
 * structural immutability as its refinement boundary.
 */
export function buildCBCExitState(
  stable: boolean,
  message: string
): CBCExitState {
  const artifact: CBCExitState = {
    doctrine: "CentralBleedControl_ExitBoundary",
    status: "CBC_EXIT_STATE",

    stable,
    message
  };

  // Structural immutability — prevents authority propagation.
  return Object.freeze(artifact);
}
