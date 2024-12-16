/**
 * Trims a string to its first 8 characters
 * @param input - The input string to be trimmed
 * @returns The first 8 characters of the input string
 */
export const trimID = (input: string): string => {
    if (!input || input.length <= 8) return input;
    return input.slice(0, 8);
};

/**
 * Formats a date string to DD-MM-YYYY format
 * @param dateString - The input date string (ISO 8601 format)
 * @returns Formatted date string in DD-MM-YYYY format
 */
export const formatDateISO = (dateString: string): string => {
    // Handle potential invalid date inputs
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        console.warn('Invalid date input');
        return '';
    }

    // Pad single-digit numbers with leading zero
    const pad = (num: number) => num.toString().padStart(2, '0');

    // Extract day, month, and year
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Months are 0-indexed
    const year = date.getFullYear();

    // Return formatted date
    return `${day}-${month}-${year}`;
};

/**
 * Formats a date string to DD-MM-YYYY HH:MM:SS format
 * @param dateString - The input date string (ISO 8601 format)
 * @param includeTime - Optional flag to include time (default: true)
 * @returns Formatted date string in DD-MM-YYYY HH:MM:SS format or DD-MM-YYYY format
 */
export const formatDateToISOWithTime = (dateString: string, includeTime: boolean = true): string => {
    // Handle potential invalid date inputs
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        console.warn('Invalid date input');
        return '';
    }

    // Pad single-digit numbers with leading zero
    const pad = (num: number) => num.toString().padStart(2, '0');

    // Extract day, month, year, hours, minutes, and seconds
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Months are 0-indexed
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    // Return formatted date with or without time
    if (includeTime) {
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    } else {
        return `${day}-${month}-${year}`;
    }
};