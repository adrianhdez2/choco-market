export const useSubstring = (string, lengthString) => {
    let text = string.trim().length > lengthString ? string.substring(0, lengthString) + "..." : string

    return { text }
}