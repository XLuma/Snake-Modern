export const load = async ({ fetch }) => {
    const data = await fetch('http://localhost:3000/api');
    const ret = await data.json();
    console.log(ret)
    return ret
};