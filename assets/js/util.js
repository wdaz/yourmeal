function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
}

function setLocalStorage(key, value) {
    if (typeof value === 'undefined' || value === null) {
        throw new Error('setLocalStorage: value is required');
    }
    localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorage(...keys) {
    if (keys.length > 0) {
        keys.forEach(key => {
            localStorage.removeItem(key);
        });
    } else {
        localStorage.clear();
    }
}