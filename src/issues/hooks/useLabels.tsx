import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GithubLabel } from "../interfaces";

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60,
        // placeholderData: [
        //     {
        //         "id": 6955781886,
        //         "node_id": "LA_kwDOAJy2Ks8AAAABnpjO_g",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
        //         "name": "Compiler: todo",
        //         "color": "C2E0C6",
        //         "default": false,
        //         "description": ""
        //     } satisfies GithubLabel,
        //     {
        //         "id": 710573595,
        //         "node_id": "MDU6TGFiZWw3MTA1NzM1OTU=",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
        //         "name": "Component: Developer Tools",
        //         "color": "fbca04",
        //         "default": false,
        //         "description": ""
        //     } satisfies GithubLabel,
        // ]
        // initialData: [
        //                 {
        //         "id": 6955781886,
        //         "node_id": "LA_kwDOAJy2Ks8AAAABnpjO_g",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
        //         "name": "Compiler: todo",
        //         "color": "C2E0C6",
        //         "default": false,
        //         "description": ""
        //     } satisfies GithubLabel,
        //     {
        //         "id": 710573595,
        //         "node_id": "MDU6TGFiZWw3MTA1NzM1OTU=",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
        //         "name": "Component: Developer Tools",
        //         "color": "fbca04",
        //         "default": false,
        //         "description": ""
        //     } satisfies GithubLabel,
        // ]
    });

    return {
        labelsQuery,
    };
}