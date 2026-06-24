import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import { CreateTopicInput, CreateTopicState } from "../types/topics.types";
import { createTopic } from "../services/topics.services";

export function useCreateTopic(workspaceId: string) {
    const [state, setState] = useState<CreateTopicState>({
        topic: null,
        loading: false,
        error: null,
    });

    const create = useCallback(
        async (data: CreateTopicInput): Promise<boolean> => {
            setState({ topic: null, loading: true, error: null });
            try {
                const response = await createTopic(workspaceId, data);

                setState({ topic: response.topic, loading: false, error: null });
                return true;
            } catch (err) {
                const axiosError = err as AxiosError<{ message: string }>;
                setState({
                    topic: null,
                    loading: false,
                    error: axiosError.response?.data?.message ?? "UNKNOWN_ERROR",
                });
                return false;
            }
        },
        [workspaceId],
    );

    return { ...state, create };
}
