/**
 * CENTRAL BLEED CONTROL — Surface
 *
 * CBCSurface is the initial continuity boundary.
 *
 * It receives structural intake and forms the first
 * CBC exposure boundary before transition.
 *
 * CBCSurface does not contain:
 * - identity
 * - correlation
 * - behavior
 * - authority
 * - surveillance
 * - prediction
 *
 * CBCSurface only contains:
 * - doctrine discriminator
 * - structural status
 * - continuity state
 * - surface verdict
 * - structural path
 * - geometry continuity reference
 *
 * Biff does not live here.
 * CBCSurface only establishes the clean structural boundary
 * that downstream compression layers may consume.
 */

import { CBCBleedCheck } from "./cbc-types";

export interface CBCSurface {
  doctrine: "CentralBleedControl_SurfaceBoundary";

  status: "CBC_SURFACE_ACTIVE";

  allowed: boolean;

  bleedType?: CBCBleedCheck["bleedType"];

  source: string;

  destination: string;

  geometry: Record<string, unknown>;
}

/**
 * Build a CBCSurface artifact.
 *
 * This creates the first CBC structural boundary.
 *
 * It does not:
 * - evaluate rules
 * - compress meaning
 * - seal decisions
 * - correlate sources
 * - create authority
 */
export function buildCBCSurface(
  check: CBCBleedCheck
): CBCSurface {
  const artifact: CBCSurface = {
    doctrine: "CentralBleedControl_SurfaceBoundary",
    status: "CBC_SURFACE_ACTIVE",

    allowed: check.allowed,
    bleedType: check.bleedType,

    source: check.source,
    destination: check.destination,

    geometry: check.geometry
  };

  return Object.freeze(artifact);
}
