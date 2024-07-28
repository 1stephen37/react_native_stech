// utils/imageUtils.ts
import path from 'path';

const importAll = (r: __WebpackModuleApi.RequireContext) => {
    return r.keys().reduce((images, file) => {
        images[path.basename(file, path.extname(file))] = r(file);
        return images;
    }, {} as Record<string, any>);
};

export const images = importAll(require.context('@/assets/images/sections/', false, /\.(png|jpe?g|svg)$/));
