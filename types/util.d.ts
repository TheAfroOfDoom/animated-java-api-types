export function objectEqual(a: any, b: any): boolean

/** Rounds a n to the nearist multiple of d */
export function roundTo(n: number, d: number): number
/** Rounds a number to the nearest xth decimal place */
export function roundToN(n: number, x: number): number

/**
 * Returns a promise that resolves when the given resolver function returns a non-null value
 * @param resolver A function that returns a value or null
 * @param interval The interval in milliseconds to check the resolver function
 */
export function pollPromise<T = any>(
	resolver: () => T | undefined | null,
	interval?: 250
): Promise<T>

/**
 * An class that lets you limit how much time something can take per frame.
 */
export class LimitClock {
	constructor(limit: number)
	lastTime: number
	public limit: number

	sync(): Promise<void>
}

/**
 * Resolves a string with %ENVIORNMENT% variables
 */
export function resolveEnv(path: string): string

export function formatStr(str: string, formatObj?: Record<string, string> | string[]): string

export class ExpectedError extends Error {}
