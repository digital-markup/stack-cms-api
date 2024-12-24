const parseArray = (data: string): string[] => {
    return data.split(",").map(item => item.trim());
}

export default parseArray