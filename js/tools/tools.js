export function inheritCV(originalCV) {
    return JSON.parse(JSON.stringify(originalCV));
}
