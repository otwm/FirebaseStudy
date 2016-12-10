import {SAVE, INSERT, UPDATE, DELETE} from "./actionTypes";
import {Set, Record} from "immutable";

export const Article = new Record({
    id: 0,
    title: "article title",
    content: "content",
    createDate: new Date(),
    updateDate: null,
    hit: 0
});

export const Articles = new Set();

export function articlesReducer(state = new Article(), {payload, type}) {
    switch (type) {
        case INSERT:
            return state.add(payload);
        case UPDATE:
            return state.merge(payload);
        case DELETE:
            return state.update(payload);
        case SAVE:
            return state.add(payload);
        default:
            return state;
    }

}

