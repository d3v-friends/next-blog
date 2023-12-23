export default function(...strs: string[]): string {
    let res = "";
    for (const elem of strs) {
        res += `${elem} `;
    }
    return res.slice(0, res.length - 1);
};
