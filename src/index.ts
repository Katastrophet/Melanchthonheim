/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}



WA.room.onEnterZone('hello', () => {
    currentPopup =  WA.ui.openPopup("helloPopup","It's a me, Mario!",[]);
})

WA.room.onLeaveZone('hello', closeHello)

function closeHello(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
