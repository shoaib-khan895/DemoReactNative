import { COUNTER_CHANGE } from '../constants';

export function changeCount(count) {
    dis {
        type: COUNTER_CHANGE,
        payload: count
    }
}

