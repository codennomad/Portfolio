export interface ContributionDay {
  date: string
  contributionCount: number
  weekday: number
}

export interface ContributionWeek {
  contributionDays: ContributionDay[]
}

export interface GitHubRepo {
  name: string
  description: string | null
  url: string
  stargazerCount: number
  forkCount: number
  primaryLanguage: { name: string; color: string } | null
  updatedAt: string
  isArchived: boolean
  repositoryTopics: { nodes: { topic: { name: string } }[] }
}

export interface GitHubUser {
  login: string
  name: string
  bio: string
  avatarUrl: string
  followers: { totalCount: number }
  following: { totalCount: number }
  repositories: { totalCount: number }
  contributionsCollection: {
    totalCommitContributions: number
    totalPullRequestContributions: number
    totalIssueContributions: number
    contributionCalendar: {
      totalContributions: number
      weeks: ContributionWeek[]
    }
  }
  pinnedItems: {
    nodes: GitHubRepo[]
  }
  topRepositories: {
    nodes: GitHubRepo[]
  }
}

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"

const USER_QUERY = `
  query GetUser($login: String!) {
    user(login: $login) {
      login
      name
      bio
      avatarUrl
      followers { totalCount }
      following { totalCount }
      repositories { totalCount }
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              weekday
            }
          }
        }
      }
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            isArchived
            primaryLanguage { name color }
            updatedAt
            repositoryTopics(first: 5) {
              nodes { topic { name } }
            }
          }
        }
      }
      topRepositories(first: 20, orderBy: { field: STARGAZERS, direction: DESC }) {
        nodes {
          name
          description
          url
          stargazerCount
          forkCount
          isArchived
          primaryLanguage { name color }
          updatedAt
          repositoryTopics(first: 5) {
            nodes { topic { name } }
          }
        }
      }
    }
  }
`

async function githubFetch<T>(query: string, variables: Record<string, unknown>): Promise<T | null> {
  const token = process.env.GITHUB_TOKEN

  // Without a token, unauthenticated requests are limited to 60/hour.
  // Skip the request entirely to avoid rate-limit crashes in dev.
  if (!token) {
    return null
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  }

  try {
    const res = await fetch(GITHUB_GRAPHQL_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.warn(`GitHub API: ${res.status} ${res.statusText} — activity feed will be hidden`)
      return null
    }

    const json = (await res.json()) as { data: T; errors?: { message: string }[] }

    if (json.errors) {
      console.warn("GitHub GraphQL errors:", json.errors.map((e) => e.message).join(", "))
      return null
    }

    return json.data
  } catch (err) {
    console.warn("GitHub fetch failed:", err)
    return null
  }
}

export async function getGitHubUser(login: string): Promise<GitHubUser | null> {
  const data = await githubFetch<{ user: GitHubUser }>(USER_QUERY, { login })
  return data?.user ?? null
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Java: "#b07219",
  PHP: "#4F5D95",
  CSS: "#563d7c",
  Shell: "#89e051",
}
