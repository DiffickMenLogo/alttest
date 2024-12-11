import * as alt from "alt-client";
import * as game from "natives";

alt.onServer("exp", () => {
  game.addExplosion(
    alt.Player.local.pos.x,
    alt.Player.local.pos.y,
    alt.Player.local.pos.z,
    5,
    0,
    true,
    false,
    1.0,
    false
  );
});
