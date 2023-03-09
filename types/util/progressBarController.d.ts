export class ProgressBarController {
	progress: number
	constructor(message: string, total: number)
	public message: string
	public total: number

	add(change: number): void
	setMessage(message: string): void
	finish(): void
}
