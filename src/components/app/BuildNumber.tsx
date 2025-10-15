export function BuildNumber() {
  const commit = import.meta.env.VITE_COMMIT_SHA as string | undefined;

  if (commit) return commit.slice(0, 7); // first 7 chars of commit SHA
  return "local"; // fallback for local dev
}
