module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "dark-blue": "#051120",
                "dark-blue-900": "#020b16",
                milk: "#dadada",
                "milk-dark": "#B3B3B3",
                border: "rgba(255, 255, 255, 0.07)",
                yellow: "#E3AA27",
                "dark-blue-600": "#111e31",
            },
            borderWidth: {
                1: "1px",
            },
            fontFamily: {
                avenir: "avenir",
            },
            letterSpacing: {
                regular: "-0.01em"
            }
        },
    },
    plugins: [],
};
