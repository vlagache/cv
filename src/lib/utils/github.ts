import dayjs from "dayjs";
import "dayjs/locale/fr"; // Charger la locale française

async function fetchCommits() {
  const url = "https://api.github.com/repos/vlagache/cv/commits";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const commits = await response.json();
    return commits;
  } catch (error) {
    console.error("Error fetching commits:", error);
    return null;
  }
}

export async function getLastCommitDate() {
  const commits = await fetchCommits();
  if (commits && commits.length > 0) {
    const firstCommit = commits[0];
    const commitDate = firstCommit.commit.committer.date;
    const date = dayjs(commitDate).locale("fr"); // Utiliser dayjs pour la date
    const formattedDate = date.format("D MMMM YYYY"); // Format européen
    return formattedDate;
  } else {
    console.error("No commits found or failed to fetch commits.");
    return null;
  }
}


