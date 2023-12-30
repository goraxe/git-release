import resolveConfig from "./resolve-config.js";
import { push } from "./git.js";

export default async (pluginConfig, context) => {
  const {
    env,
    cwd,
    branch,
    options: { repositoryUrl },
    nextRelease,
    logger,
  } = context;
  const { publishPush } = resolveConfig(pluginConfig, logger);
  if (publishPush) {
    await push(repositoryUrl, branch.name, { env, cwd });
  }

  logger.log("Prepared Git release: %s", nextRelease.gitTag);
};
