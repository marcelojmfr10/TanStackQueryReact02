import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers";
import { GithubLabel } from "../interfaces";

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500);

  // const resp = await fetch(`https://api.github.com/repos/facebook/react/labels`)
  // .then(resp => resp.json());

  const { data } = await githubApi.get<GithubLabel[]>('/labels');

  return data;
}
