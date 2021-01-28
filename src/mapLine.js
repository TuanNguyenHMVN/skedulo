const newArr = [];
let overlapIndex = null;
let unavailableItems = [
    { startPx: 10, endPx: 30 },
    { startPx: 55, endPx: 65 },
    { startPx: 35, endPx: 50 },
    { startPx: 20, endPx: 40 },
    { startPx: 60, endPx: 70 },
];
const sorted = [...unavailableItems.sort((a, b) => a.startPx - b.startPx)];
sorted.map((line, index) => {
    if (index !== overlapIndex) {
        overlapIndex = sorted.findIndex(
            (item) =>
                (item.startPx > line.startPx && item.startPx < line.endPx) ||
                (line.endPx < item.endPx && line.endPx > item.startPx)
        );
        if (overlapIndex > -1) {
            const newLine = {
                startPx: line.startPx,
                endPx:
                    line.endPx > sorted[overlapIndex].endPx
                        ? line.endPx
                        : sorted[overlapIndex].endPx,
            };
            newArr.push(newLine);
        } else {
            newArr.push(line);
        }
    }
    return line;
});
