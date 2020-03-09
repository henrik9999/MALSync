import * as helper from "./helper";

import {Single as anilistSingle} from "./AniList/single";
import {Single as kitsuSingle} from "./Kitsu/single";
import {Single as simklSingle} from "./Simkl/single";
import {Single as localSingle} from "./Local/single";

export function getSingle(url: string) {
  if(/^local:\/\//i.test(url)){
    return new localSingle(url);
  }
  var syncMode = helper.getSyncMode(url);
  if(syncMode == 'MAL'){
    //return new mal.entryClass(url);
  }else if(syncMode == 'ANILIST'){
    return new anilistSingle(url);
  }else if(syncMode == 'KITSU'){
    return new kitsuSingle(url);
  }else if(syncMode == 'SIMKL'){
    return new simklSingle(url);
  }
  throw 'Unknown sync mode';
}
