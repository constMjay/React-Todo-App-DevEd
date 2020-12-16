export const filtered = [
    { name: "All" },
    { name: "Completed" },
    { name: "Uncompleted" },
]

export function getFilters() {
    return filtered.filter(f => f)
}