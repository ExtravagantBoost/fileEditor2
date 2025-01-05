let e = {
    encrypt(text, n) {
        if (n <= 0) return text;
        let arr = text.split("");
        let odd = arr.filter((v, i) => i % 2 !== 0);
        let even = arr.filter((v, i) => i % 2 === 0);
        return e.encrypt(odd.concat(even).join(""), n - 1);
    },

    decrypt(encryptedText, n) {
        if (n <= 0) return encryptedText;
        let arr = encryptedText.split("");
        let half = Math.floor(arr.length / 2);
        let odd = arr.slice(0, half);
        let even = arr.slice(half);
        let result = [];
        for (let i = 0; i < half; i++) {
            result.push(even[i]);
            result.push(odd[i]);
        }
        if (arr.length % 2 !== 0) result.push(even[half]);
        return e.decrypt(result.join(""), n - 1);
    }
}