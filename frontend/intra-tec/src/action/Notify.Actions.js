//notify
export function ActionNotify( notification ){
    return {
        type: 'NOTIFY',
        payload: notification
    };
}
