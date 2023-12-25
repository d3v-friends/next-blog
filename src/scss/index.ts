function merge(...strs: string[]): string {
    let res = "";
    for (const str of strs) {
        res += `${str} `;
    }
    return res.slice(0, res.length - 1);
}

const fnCss = {
    merge,
};

export default fnCss;
