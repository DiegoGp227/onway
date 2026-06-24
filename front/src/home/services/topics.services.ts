import { fetcher, postFetcher } from "@/utils/utils";
import { TopicsResponse, CreateTopicInput, Topic } from "../types/topics.types";
import { TopicsURL } from "@/src/shared/constants/urls";

export function createTopic(
    workspaceId: string,
    data: CreateTopicInput,
): Promise<{ topic: Topic }> {
    return postFetcher<{ topic: Topic }>(TopicsURL(workspaceId).toString(), data);
}

export function getTopics(workspacesId: string): Promise<TopicsResponse> {
    const url = TopicsURL(workspacesId).toString();
    return fetcher<TopicsResponse>(url);
}
