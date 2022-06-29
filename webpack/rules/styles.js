export const cssRule = {
    test: /\.css$/i,
    use: ["style-loader", {
        loader: 'css-loader',
        options: {
            modules: {
                auto: true,
                localIdentName: '[local]_[hash:base64:5]',
            },
        },
    },],
};

// export const ccsModulesRule = {
//     test: /\.css$/i,
//     use: [
//         "style-loader",
//         {
//             loader: 'css-loader',
//             options: {
//                 modules: {
//                     auto: true,
//                     localIdentName: '[local]_[hash:base64:5]',
//                 },
//             },
//         }
//     ],
//     include: /\.module\.css$/,
// };
