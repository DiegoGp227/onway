import { fetcher } from "@/utils/utils";
import { TopicResponse } from "../types/topics.types";
import { TopicsURL } from "@/src/shared/constants/urls";

export function getTopics(workspacesId: string): Promise<TopicResponse> {
    const url = TopicsURL(workspacesId).toString();
    return fetcher<TopicResponse>(url);
}
