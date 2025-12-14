// @ts-check

import { CustomError } from "./error.js";

const OWNER_AFFILIATIONS = ["OWNER", "COLLABORATOR", "ORGANIZATION_MEMBER"];

/**
 * Parse owner affiliations.
 *
 * @param {string[]} affiliations
 * @returns {string[]} Parsed affiliations.
 *
 * @throws {CustomError} If affiliations contains invalid values.
 */
const parseOwnerAffiliations = (affiliations) => {
  // Set default value for ownerAffiliations.
  // NOTE: Done here since parseArray() will always return an empty array even nothing
  //was specified.
  affiliations =
    affiliations && affiliations.length > 0
      ? affiliations.map((affiliation) => affiliation.toUpperCase())
      : ["OWNER"];

  // Check if ownerAffiliations contains valid values.
  if (
    affiliations.some(
      (affiliation) => !OWNER_AFFILIATIONS.includes(affiliation),
    )
  ) {
    throw new CustomError(
      "Invalid query parameter",
      CustomError.INVALID_AFFILIATION,
    );
  }
  return affiliations;
};

export {
  OWNER_AFFILIATIONS,
  parseOwnerAffiliations,
};
