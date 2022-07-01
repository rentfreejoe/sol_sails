
import View1 from "/src/routes/influencers.svelte";
import View2 from "/src/routes/network.svelte";
import { writable } from "svelte/store"
export const viewStore =writable(View1);
export default viewStore;
