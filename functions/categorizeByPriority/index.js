export const categorizeByPriority = (objectsArray) => {
    return objectsArray.reduce(
        (result, obj) => {
            if (obj.priority === "casual") {
                result.casual.push(obj);
            } else if (obj.priority === "moderate") {
                result.moderate.push(obj);
            } else if (obj.priority === "urgent") {
                result.urgent.push(obj);
            }
            return result;
        },
        { casual: [], moderate: [], urgent: [] }
    );
}