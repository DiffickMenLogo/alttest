import * as alt from "alt-server";

// сделай взрыв корзины
alt.onRpc("blow", (player, args) => {
  alt.OnExplosion +=
    (player,
    "granade",
    player.pos.x,
    player.pos.y,
    player.pos.z,
    0,
    0,
    0,
    0,
    0,
    0,
    0);
});
