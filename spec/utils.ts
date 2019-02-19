export function formatName(first: string, last: string, fn: any) {
    return fn(`${last}, ${first}`);
}