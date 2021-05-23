export const formatPopulation = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "Million";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "Billion";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "Trillion";
};


export const getRandomFromArray = array => array[Math.floor(Math.random() * array.length)];
