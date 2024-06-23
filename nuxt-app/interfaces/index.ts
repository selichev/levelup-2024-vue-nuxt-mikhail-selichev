import type { ComputedRef } from "vue";

export interface IProducts {
    retrieve: (limit: number) => any,
    readonly list: ComputedRef<any[]>,
    readonly total: ComputedRef<number>,
}