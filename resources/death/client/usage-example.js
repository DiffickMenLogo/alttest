import alt from "alt-client";
import native from "natives";
import { getPlayerCustomHealth } from "./system.js";
const LOCAL_PLAYER = alt.Player.local;
// destroyable death controllers
let deathControllers = [];
const deathEnd = ()=>{
    deathControllers.forEach((e)=>e.destroy());
    deathControllers = [];
    alt.emitServerRaw("respawnPlayer");
};
alt.on("customPlayerDeath", ()=>{
    const text = alt.Utils.drawText2d("press ~g~E~w~ to respawn");
    // KeyCode.E
    const keybind = new alt.Utils.Keybind(69, ()=>{
        alt.log("pressed E");
        deathEnd();
    });
    deathControllers.push(text, keybind);
});
// hiding health and armour for displaying our custom health value and not some big weird value
const hideHealthAndArmourBars = ()=>{
    alt.beginScaleformMovieMethodMinimap("SETUP_HEALTH_ARMOUR");
    native.scaleformMovieMethodAddParamInt(3);
    native.endScaleformMovieMethod();
};
// making sure health and armour bars under minimap are always hidden
// (e.g. it can reset after opening and closing pause menu)
alt.setInterval(hideHealthAndArmourBars, 300);
// custom health ""bars""
new alt.Utils.EveryTick(()=>{
    alt.Utils.drawText2dThisFrame(`health: ~g~${getPlayerCustomHealth(LOCAL_PLAYER)}`, {
        x: 0.5,
        y: 0.95
    }, // GameFont.Pricedown
    7);
    alt.Utils.drawText2dThisFrame(`h: ~g~${LOCAL_PLAYER.health}`, {
        x: 0.5,
        y: 0.8
    }, // GameFont.Pricedown
    7);
    for (const player of alt.Player.streamedIn){
        alt.Utils.drawText3dThisFrame(`health: ~g~${getPlayerCustomHealth(player)}`, player.pos, // GameFont.Pricedown
        7, 0.3);
    }
});
