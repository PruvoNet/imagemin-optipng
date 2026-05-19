import {type Plugin} from 'imagemin';

export interface Options {
	/** @default true */
	bitDepthReduction?: boolean;
	/** @default true */
	colorTypeReduction?: boolean;
	/**
	 * Select the optimization level between 0 and 7.
	 * @default 3
	 */
	optimizationLevel?: number;
	/** @default true */
	paletteReduction?: boolean;
	/** Enable error recovery (-fix). @default true */
	errorRecovery?: boolean;
	/** Force or remove progressive scan order. */
	interlaced?: boolean | null;
}

declare const imageminOptipng: (options?: Options) => Plugin;

export default imageminOptipng;
