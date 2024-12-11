import * as alt from "alt-server";
import * as chat from "chat";

chat.registerCmd("exp", () => {
  alt.emitClient("exp");
});
