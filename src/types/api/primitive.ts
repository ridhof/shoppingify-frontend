interface Meta {
    responseStatus: string;
    statusCode: number;
};

interface APIResponse<Data> {
    data: Data;
    meta: Meta;
};

interface APIResponseArray<Data> {
    data: Data[];
    meta: Meta;
};

export type { APIResponse, APIResponseArray };