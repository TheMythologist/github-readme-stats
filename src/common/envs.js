// @ts-check

const whitelist = process.env.WHITELIST
  ? process.env.WHITELIST.split(",")
  : undefined;

const gistWhitelist = process.env.GIST_WHITELIST
  ? process.env.GIST_WHITELIST.split(",")
  : undefined;

const excludeRepositories = process.env.EXCLUDE_REPO
  ? process.env.EXCLUDE_REPO.split(",")
  : [];

const excludeOrganizations = process.env.EXCLUDE_ORG
  ? process.env.EXCLUDE_ORG.split(",")
  : [];

const excludeOrganizationRepositories = process.env.EXCLUDE_ORG_REPO
  ? process.env.EXCLUDE_ORG_REPO.split(",")
  : [];

export { whitelist, gistWhitelist, excludeRepositories, excludeOrganizations, excludeOrganizationRepositories };
