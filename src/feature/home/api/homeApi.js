export async function fetchUser(data) {
    const url = "http://www.mocky.io/v2/5c41920e0f0000543fe7b889 ";

    try {
        let response = await fetch(url, {
            method: "GET",
        });

        return {
            status: response.ok,
            data: await response.json(),
        };
    } catch (e) {
        console.error(e);
        throw e;
    }
}
