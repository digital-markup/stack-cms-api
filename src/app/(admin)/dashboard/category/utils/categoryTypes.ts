export type Category = {
    id: string,
    slug: string,
    name: string,
    is_archived: boolean,
    created_at: string,
    updated_at: string
};

export type CategoryFormData = {
    name: string,
    slug: string
}