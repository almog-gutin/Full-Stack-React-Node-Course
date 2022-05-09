export const doesStringContainANumber = (str) => {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        switch (char) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                return true;
        }
    }

    return false;
};
