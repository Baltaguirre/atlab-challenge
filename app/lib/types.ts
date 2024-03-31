export type fetchedUserData = {
  login?: string | null;
  id?: number | null;
  node_id?: string | null;
  avatar_url?: string | null;
  gravatar_id?: string | null;
  url?: string | null;
  html_url?: string | null;
  followers_url?: string | null;
  following_url?: string | null;
  gists_url?: string | null;
  starred_url?: string | null;
  subscriptions_url?: string | null;
  organizations_url?: string | null;
  repos_url?: string | null;
  events_url?: string | null;
  received_events_url?: string | null;
  type?: string | null;
  site_admin?: boolean;
  name?: string | null;
  company?: string | null;
  blog?: string | null;
  location?: string | null;
  email?: string | null;
  hireable?: boolean;
  bio?: string | null;
  twitter_username?: string | null;
  public_repos?: number | null;
  public_gists?: number | null;
  followers?: number | null;
  following?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  message?: string | null;
  documentation_url?: string | null;
};

export type fetchUserGithubProfileParams = {
  query: string;
};
