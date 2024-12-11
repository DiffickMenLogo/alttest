const RETRY_DELAY = 2500;
const DEBUG_PORT = 7788;
async function getLocalClientStatus() {
    try {
        const response = await fetch(`http://127.0.0.1:${DEBUG_PORT}/status`);
        console.log(response);
        return response.text();
    } catch (error) {
        return null;
    }
}
async function connectLocalClient() {
    console.log("reconnecting local client");
    const status = await getLocalClientStatus();
    if (status === null) return;
    if (status !== "MAIN_MENU" && status !== "IN_GAME") {
        setTimeout(()=>connectLocalClient(), RETRY_DELAY);
        return;
    }
    try {
        await fetch(`http://127.0.0.1:${DEBUG_PORT}/reconnect`, {
            method: "POST"
        });
    } catch (error) {
        console.log(error);
    }
}
connectLocalClient();
