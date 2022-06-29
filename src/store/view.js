
import View1 from "/src/components/view1.svelte";
import View2 from "/src/components/view2.svelte";
import { writable } from "svelte/store"
export const viewStore =writable(View1);
export default viewStore;
