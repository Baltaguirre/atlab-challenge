import { fetchUserGithubProfileParams, fetchedUserData } from "./types";

export async function fetchUserGithubProfile(
  params: fetchUserGithubProfileParams
): Promise<fetchedUserData> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${params.query}`,
      {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "request",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching GithubUser Error:", error);
    throw new Error("Failed to fetch GithubUser.");
  }
}

export async function fetchUserGithubProfileRepos(
  params: fetchUserGithubProfileParams
): Promise<any> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${params.query}/repos`,
      {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "request",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching GithubUserRepos Error:", error);
    throw new Error("Failed to fetch GithubUserRepos.");
  }
}
